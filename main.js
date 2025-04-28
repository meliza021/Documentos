// main.js
const campusArticles = [
    {
      id: 1,
      title: "Jornada de puertas abiertas en Ingeniería",
      summary: "Visitas guiadas y charlas con profesores y estudiantes.",
      content: "<p>Este sábado 3 de mayo, la Facultad de Ingeniería abrirá sus puertas a todos los interesados en conocer nuestras instalaciones y programas académicos. Habrá demostraciones de proyectos estudiantiles y sesiones informativas sobre becas y admisiones.</p>",
      author: "Oficina de Admisiones",
      date: "28 de abril, 2025",
      category: "Eventos"
    },
    {
      id: 2,
      title: "Proyecto de robótica gana concurso nacional",
      summary: "El equipo RoboCanino de Informática obtuvo el primer lugar.",
      content: "<p>Tras meses de trabajo intenso, el equipo de estudiantes de la Facultad de Informática logró el primer puesto en el Concurso Nacional de Robótica con su proyecto 'RoboCanino', un asistente robótico para personas con discapacidad visual.</p>",
      author: "Facultad de Ingeniería",
      date: "25 de abril, 2025",
      category: "Investigación"
    },
    {
      id: 3,
      title: "Torneo interfacultades comienza este viernes",
      summary: "Más de 15 equipos competirán en fútbol, baloncesto y voleibol.",
      content: "<p>El tradicional torneo deportivo entre facultades arranca este viernes con una ceremonia inaugural en el polideportivo central. Este año participan 16 equipos que representan a todas las facultades del campus. Los partidos se extenderán durante todo el mes de mayo.</p>",
      author: "Departamento de Deportes",
      date: "24 de abril, 2025",
      category: "Deportes"
    },
    {
      id: 4,
      title: "Nueva sala de estudio 24 horas",
      summary: "La biblioteca inaugura espacio permanentemente disponible para estudiantes.",
      content: "<p>Respondiendo a una solicitud de larga data del alumnado, la biblioteca central ha habilitado una nueva sala de estudio que permanecerá abierta las 24 horas del día. El espacio cuenta con conexiones eléctricas, WiFi de alta velocidad y máquinas de café.</p>",
      author: "Biblioteca Central",
      date: "22 de abril, 2025",
      category: "Vida estudiantil"
    },
    {
      id: 5,
      title: "Convocatoria de becas para intercambio internacional",
      summary: "Oportunidades para estudiar un semestre en universidades de Europa y Asia.",
      content: "<p>La Oficina de Relaciones Internacionales ha abierto la convocatoria para el programa de intercambio académico del próximo semestre. Se ofrecen 25 plazas en 12 universidades asociadas, con becas que cubren hasta el 80% de los gastos de matrícula y alojamiento.</p>",
      author: "Relaciones Internacionales",
      date: "20 de abril, 2025",
      category: "Becas"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const newsApp = document.querySelector('campus-news-app');
    newsApp.articles = campusArticles;
  });