
import { topics } from "./topics.js";
import { charts, chartDescriptions } from "./charts.js";

document.addEventListener("DOMContentLoaded", () => {
  const processBtn = document.getElementById("process-btn");
  const outputSection = document.getElementById("output-section");
  const factorsList = document.getElementById("factors-list");
  const suggestedExpression = document.getElementById("suggested-expression");
  const practicalExamples = document.getElementById("practical-examples");
  const presentationTips = document.getElementById("presentation-tips");
  const chartSection = document.getElementById("chart-section");

  processBtn.addEventListener("click", () => {
    const topicInput = document.getElementById("input-topic").value.trim();
    if (!topicInput) return alert("Por favor, ingrese un tema.");

    // Mostrar la sección de salida
    outputSection.classList.remove("hidden");

    // Limpiar contenido previo
    factorsList.innerHTML = "";
    practicalExamples.innerHTML = "";
    presentationTips.innerHTML = "";
    chartSection.innerHTML = "";

    // Evaluar el tema ingresado
    const topic = topics.find(t => topicInput.toLowerCase().includes(t.keyword)) || {
      factors: ["¿Cuál es el término más representativo del tema?", "¿Existe un sector social o físico afectado directamente?", "¿Cómo abordar la problemática derivada del tema?"]
    };

    // Factores clave
    topic.factors.forEach(factor => {
      const li = document.createElement("li");
      li.textContent = factor;
      factorsList.appendChild(li);
    });

    // Forma sugerida de expresarlo
    suggestedExpression.textContent = `Para abordar el tema "${topicInput}", puedes empezar describiendo sus características principales, seguido de ejemplos relevantes.`;

    // Ejemplos prácticos
    const examples = [
      `Podrías emplear una dicción clara para exponer el tema "${topicInput}", considera iniciar con: "Según el informe..."`,
      `Si estás hablando de "${topicInput}", considera iniciar con: "Este tema es relevante porque afecta..."`,
      `Otra manera efectiva de expresar "${topicInput}" es usar una estadística interesante para captar atención.`,
      `Si estás tratando sobre "${topicInput}", puedes comenzar con: "Un dato importante que debes saber es..."`,
      `Una forma de presentar "${topicInput}" es contextualizarlo en términos de impacto social, por ejemplo: "El efecto de esto se refleja en..."`,
      `Para hablar de "${topicInput}", comienza destacando la importancia de este asunto: "Este tema tiene repercusiones directas en..."`,
      `Una técnica efectiva es iniciar con una cita famosa relacionada con "${topicInput}", como: "Como dijo [nombre]: '...'."`,
      `Cuando hables de "${topicInput}", puedes comenzar con: "En los últimos años, hemos observado que..."`,
      `Si el tema es "${topicInput}", plantea una pregunta al inicio: "¿Sabías que...?"`,
   
  
    ];
    
    examples.forEach(example => {
      const li = document.createElement("li");
      li.textContent = example;
      practicalExamples.appendChild(li);
    });

    // Consejos de presentación
    const tips = [
      "Mantén contacto visual con tu audiencia.",
      "Expresa tus ideas con claridad y moderación.",
      "Haz pausas para enfatizar puntos importantes.",
      "Profundiza solo en los aspectos más relevantes del tema.",
      "Usa ejemplos para ilustrar tus puntos de vista.",
      "Escucha atentamente las preguntas antes de responder.",
      "Evita el uso excesivo de jerga técnica que pueda confundir.",
      "Mantén un ritmo adecuado para que tu audiencia siga fácilmente.",
      "Sé consciente de tu lenguaje corporal.",
      "Adapta tu discurso según el perfil de tu audiencia.",
      "Haz preguntas abiertas para fomentar la participación.",
      "Utiliza apoyo visual para reforzar tus mensajes.",
      "Mantén una postura relajada pero profesional.",
      "Asegúrate de que tu entorno sea adecuado para la presentación.",
      "Enfócate en los puntos clave y no en los detalles menores.",
      "Practica tu discurso antes de la presentación.",
      "Controla el volumen y tono de tu voz.",
      "Usa transiciones claras entre los temas que tratas.",
      "Anticipa posibles preguntas y prepara tus respuestas.",
      "No te apresures, habla con confianza y seguridad."
    ];
    
    tips.forEach(tip => {
      const li = document.createElement("li");
      li.textContent = tip;
      presentationTips.appendChild(li);
    });

    // Representaciones gráficas sugeridas
    const randomChart = charts[Math.floor(Math.random() * charts.length)];
    const chartContainer = document.createElement("div");
    chartContainer.classList.add("flex", "flex-col", "items-center", "space-y-4");

    const img = document.createElement("img");
    img.src = randomChart.path;
    img.alt = randomChart.type;
    img.classList.add("w-48", "h-48", "object-contain", "rounded-md", "shadow-lg");

    const description = document.createElement("p");
    description.textContent = chartDescriptions[randomChart.type];
    description.classList.add("text-gray-700", "mt-2");

    chartContainer.appendChild(img);
    chartContainer.appendChild(description);
    chartSection.appendChild(chartContainer);
  });
});
