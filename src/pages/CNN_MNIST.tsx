import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

export default function CNN_MNIST() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);

  // ------------------------------------------------
  // 1. Cargar tu modelo TFJS desde /public/mnist/
  // ------------------------------------------------
  useEffect(() => {
    async function loadModel() {
      try {
        console.log("Cargando modelo MNIST local...");
        const loadedModel = await tf.loadGraphModel("/mnist/model.json");
        setModel(loadedModel);
        console.log("Modelo cargado correctamente.");
      } catch (err) {
        console.error("Error cargando el modelo:", err);
      }
    }

    loadModel();
  }, []);

  // ------------------------------------------------
  // 2. Funciones para dibujar
  // ------------------------------------------------
  function getCTX() {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }

  const handleMouseDown = () => { drawing.current = true; };
  const handleMouseUp = () => { drawing.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drawing.current) return;

    const ctx = getCTX();
    if (!ctx) return;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 12, 0, Math.PI * 2);
    ctx.fill();
  };

  // ------------------------------------------------
  // 3. Preprocesar imagen y predecir
  // ------------------------------------------------
  async function predictDigit() {
    if (!model) return;
    const ctx = getCTX();
    if (!ctx) return;

    // Obtener imagen 28x28 para el modelo
    const small = document.createElement("canvas");
    small.width = 28;
    small.height = 28;
    const smallCtx = small.getContext("2d")!;

    smallCtx.drawImage(canvasRef.current!, 0, 0, 28, 28);
    const imgData = smallCtx.getImageData(0, 0, 28, 28);

    // Tensor [1, 28, 28, 1]
    const input = tf.browser
      .fromPixels(imgData, 1)
      .toFloat()
      .div(255.0)
      .reshape([1, 28, 28, 1]);

    // Modelo GraphModel → output tensor
    const output = model.execute(input) as tf.Tensor;

    const predictions = (await output.data()) as Float32Array;
    const pred = predictions.indexOf(Math.max(...predictions));

    setPrediction(pred);
  }

  function clearCanvas() {
    const ctx = getCTX();
    if (!ctx) return;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 280, 280);
    setPrediction(null);
  }

  // ------------------------------------------------
  // 4. UI
  // ------------------------------------------------
  return (
    <div style={{ padding: 20 }}>
      <h1>Reconocimiento de Dígitos (MNIST)</h1>

      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        style={{
          border: "1px solid white",
          background: "black",
          cursor: "crosshair"
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      />

      <div style={{ marginTop: 20 }}>
        <button onClick={predictDigit} disabled={!model}>
          {model ? "Predecir" : "Cargando modelo..."}
        </button>

        <button onClick={clearCanvas} style={{ marginLeft: 10 }}>
          Limpiar
        </button>
      </div>

      {prediction !== null && (
        <h2 style={{ marginTop: 20 }}>Predicción: {prediction}</h2>
      )}
    </div>
  );
}
