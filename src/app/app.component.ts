import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  paragraphs?: string[];
  bullets?: string[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly skills = ['AngularJS', 'Spring Boot', 'Infraestructura de software'];
  readonly certifications = ['Spring Boot', 'Azure Inteligencia Artificial', 'Scrum', 'Scrum Foundation', 'Vue JS', 'IA Generativa', 'Docker'];

  readonly experiencias: Experience[] = [
    {
      company: 'Entelgy',
      role: 'Senior Full Stack Developer',
      period: 'octubre de 2025 - Present (1 año)',
      location: 'Gran Santiago, Región Metropolitana de Santiago, Chile',
      paragraphs: [
        'General:',
        'Desarrollo de aplicaciones empresariales utilizando Java , Node Js, Spring Boot , Vue Js Angular , AWS , Git , DSL , Lenguaje C , Java Script , Type Script , BD Oracle PostgreSql, IA Generativa',
        'Descripción:'
      ],
      bullets: [
        'Diseñar, desarrollar y mantener aplicaciones web utilizando Angular/React Js en el frontend y Java con Spring Boot/ Lenguaje C/DSL en el backend, siguiendo buenas prácticas y estándares de la organización.',
        'React Hooks: useState, useEffect, useContext.',
        'Creación de componentes funcionales y reutilizables.',
        'Implementación de Api Rest en Node Js / Spring Boot e integración con Oracle y PostgreSql , desplegando sobre servidores de aplicaciones con Jboss y Servicios en la nube AWS',
        'Manejo de estado con Context API, Redux o Redux Toolkit.',
        'Manejo de estado Pinia en Vue js',
        'Participación en proyectos de modernización tecnológica y mantenimiento evolutivo',
        'Metodologías Agiles usando Kanban y Scrum',
        'Manejo de Node Express',
        'Participar en todo el ciclo de vida del desarrollo: levantamiento de requerimientos, diseño técnico, codificación, pruebas, despliegue y soporte evolutivo/correctivo.',
        'Dar planteamientos para la solución de problemas',
        'Corregir vulnerabilidades para la seguridad de las aplicaciones de desarrollo',
        'Colaborar con equipos multidisciplinarios (QA, negocio, infraestructura) , buenas prácticas de documentación.',
        'Uso de Git y GitHub para el manejo de control de versiones del repositorio'
      ]
    },
    {
      company: 'Tecnova IT Solutions',
      role: 'Senior Desarrollador Full Stack',
      period: 'mayo de 2024 - julio de 2025 (1 año 3 meses)',
      location: 'Gran Santiago',
      paragraphs: [
        'Desarrollador en la creación de Servicios usando Spring Boot del lado del Backend , Implementación de generar el Captcha en las aplicaciones, Manejo de Docker , Migración de Sistemas a Spring Boot, Desarrollo usando Angular Js , React Js y Thymeleaf del lado FrontEnd. Manejador de Base de datos Oracle y Mongo DB, Utilizar las herramientas de Git, Pipeline para el manejo del traspaso al ambiente del repositorio QA. Utilizar el Dashboard de Git para la planificación de actividades. Implementación de envíos de archivos y correos con Spring Boot. Implementación de generar reportes en Excel y PDF en la migración a Spring Boot. Desarrollo usando Bootstrap 4 y 5 , Java Script , CSS3 ,Jquery. Realizar QA en las aplicaciones implementadas. Correcciones y actualizaciones de las vulnerabilidades de dependencia que se presenta en el archivo pom. Realizar documentación de los proyectos desarrollados.. Durante este periodo se Desarrollaron 5 Sistemas diferentes para la migración.'
      ]
    },
    {
      company: 'Banco Santander (Contratado por Qintess)',
      role: 'Desarrollador de front-end',
      period: 'febrero de 2024 - mayo de 2024 (4 meses)',
      paragraphs: ['Desarrollo en React Js']
    },
    {
      company: 'QWANTEC',
      role: 'Desarrollador FullStack',
      period: 'septiembre de 2023 - febrero de 2024 (6 meses)',
      location: 'Gran Santiago, Región Metropolitana de Santiago, Chile',
      paragraphs: ['Desarrollo de Control de Asistencia para el cliente de Mexico . Se uso la tecnología Spring Boot + Jhipster y Vue + Nuxt Js']
    },
    {
      company: 'Valio / Apiux/ Tecnova',
      role: 'Senior Desarrollador Full Stack',
      period: 'julio de 2021 - agosto de 2023 (2 años 2 meses)',
      location: 'Santiago de Chile',
      paragraphs: ['Desarrollador Full Stack para la Institución de Servicios Impuesto Internos de Chile. Utilizando herramientas como: Vue Js, React Js ,Boostrap, Vuetify, CSS3. Integracion de microservicios provenientes del Backend de Java (Spring Tool Suite 4) al Frontend. Utlice Git Lab, Jenkins, Metodologia Scrum. Creación microservicios usando Java bajo Spring Boot.']
    },
    {
      company: 'SOURCING',
      role: 'DESARROLLADOR FULL STACK',
      period: 'febrero de 2021 - mayo de 2021 (4 meses)',
      location: 'Las Condes, Región Metropolitana de Santiago, Chile',
      paragraphs: ['Desarrollar y dar soporte a los Sistemas.', 'Backend: PHP Framework Laravel', 'Base de Datos Mysql', 'Front End: Vue Js, HTML5, JavaScript.']
    },
    {
      company: 'Apiux Tecnología',
      role: 'Especialista Sénior',
      period: 'agosto de 2020 - diciembre de 2020 (5 meses)',
      location: 'Santiago, Región Metropolitana de Santiago, Chile',
      paragraphs: ['Especialista en Desarrollo Web para el Poder Judicial de Chile utilizando tecnologías en Vue Js , Vuetify, Codeigniter PHP, Base de Datos Sql Server y Oracle. Consumir API de Consulta de Base de Datos , JSPDF para generar reportes en PDF.']
    },
    {
      company: 'Tecnova IT Solutions',
      role: 'Desarrollador web',
      period: 'diciembre de 2019 - marzo de 2020 (4 meses)',
      location: 'Santiago Centro',
      paragraphs: [
        'Tecnologias usadas:',
        '- Base de Datos Maria DB',
        '- PHP Codeigniter version 4.0',
        '- Jquery',
        '- Java Script',
        '- GitFlow.',
        'Se desarrollo un modulo de Subrogancia para el Sistema de Atención a la Ciudadanía.',
        'Se construyo un sistema para generar encuestas de Educación Previsión Social, Se desarrollo un Dashboard cuyo genera Estadísticas de las encuestas por ejemplo Promedio, Cantidad de encuestados entre hombres y mujeres, Paises encuestados, cantidad de aprobados en la encuesta entre hombres y mujeres.',
        '- Al final del proyecto se hizo una presentación del avance del Sistema.'
      ]
    },
    {
      company: 'Globalsym',
      role: 'Desarrollador de software',
      period: 'julio de 2017 - diciembre de 2019 (2 años 6 meses)',
      location: 'Chile',
      paragraphs: [
        'Analista en Diseño y Desarrollo de Sistema, programación en PHP, Java Script, Html 5, JQuery, Ajax, CSS, Bootstrap, Manejador de la bases de datos MariaDB, Framework PHP Codeigniter Modelo Vista Controlador. Se utilizó la herramienta ,editor de texto Sublime text 2, Git Control de versiones en los archivos de codigo PHP.',
        '- Logros Obtenidos: Se rediseño un Sistema de Juego de Negocios para la toma decisiones orientado a estudiantes universitarios y colegios .',
        '- Respaldo de la Base de Datos.',
        '- -Administrador de Servidores de Media Temple y Google Cloud Platform (GCP).',
        '- -En el primer mes del Proyecto se trabajo con Node Js y Mongo DB, Generando Api para la base de datos Mongo DB. Se uso el servidor web Heroku.',
        '- -Durante los años en Globalsym trabaje en otros proyectos de desarrollo con servidores de Linux, instalación del apache PHP, Instalación de la base de Datos MariaDB, ejecución de consultas de la base de Datos MariaDB por medio de la consola de Linux, Integracion de nuevos Formularios en los modulos del Simulador de Negocios. Envio SMS usando tecologias Nexmo.'
      ]
    },
    {
      company: 'Grupo Tech Savvy Way',
      role: 'Especialista de Desarrollo',
      period: 'mayo de 2016 - enero de 2017 (9 meses)',
      paragraphs: [
        '1- Desarrollo entorno al ambiente de Framework de HTML5 de Bootstrap y PHP.',
        'Cuyo se desarrollo un Sistema de Contabilidad en Miami que duro 3 meses.',
        '2- Desarrollo entorno al ambiente de Framework de HTML5 de Bootstrap y el Framework de PHP Codeigniter.',
        'Proyecto del Sistema de Béisbol League Hub de Australia.Cuyo se implementara como la pagina Oficial de Béisbol de Grandes Ligas en Australia.'
      ]
    },
    {
      company: 'FUNDICIÓN PACIFICO',
      role: 'Desarrollador web',
      period: 'septiembre de 2015 - abril de 2016 (8 meses)'
    },
    {
      company: 'Concejo Nacional Electoral',
      role: 'Coordinador de Sistemas',
      period: 'agosto de 2011 - agosto de 2015 (4 años 1 mes)',
      location: 'Mariche',
      paragraphs: ['Analista de Sistemas, PHP Jquery, Java Script , HTML 5, CSS3 , Mysql , HeidiSql']
    },
    {
      company: 'CORPOELEC',
      role: 'Analista de Sistema',
      period: 'septiembre de 2008 - junio de 2010 (1 año 10 meses)',
      paragraphs: ['PHP , HTML , CSS3 , Mysql']
    }
  ];

  printCv(): void {
    window.print();
  }
}
