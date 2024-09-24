export const articles = [
    {
      id: 1,
      title: "Article 1",
      description: "This is a brief description of Article 1.",
      date: "2024-09-24",
      bigPhoto: poster1,
      content: (
        <div>
          Detailed JSX content for Article 1 goes here. More details to read...
        </div>
      ),
    },
    {
      id: 2,
      title: "Diseños que Inspiran",
      description:
        " ¿Necesitas un poco de inspiración para tu día a día? ✨ Descarga nuestros diseños por Drive",
      date: "2024-09-23",
      bigPhoto: poster1,
      content: (
        <div>
          <p>
            ¿Necesitas un poco de inspiración para tu día a día? ✨ ¡Aquí
            encontrarás una colección de frases motivacionales diseñadas
            especialmente para ti! Perfectas para compartir, usar como fondo de
            pantalla o simplemente tener un recordatorio diario. Si tienes
            sugerencias, no dudes en contactarnos por Instagram. Explora nuestros
            diseños:
          </p>
  
          <p>
            <a
              target="_blank"
              class="block underline-offset-1 underline"
              href="https://drive.google.com/drive/folders/1gNpCWpx-Tmdrjx7DPJAfCOhkjSf6tyLJ"
            >
              https://drive.google.comdrive/folders/1gN...
            </a>
          </p>
  
            <img
              src={poster1}
              className="w-full h-64 object-cover my-3 rounded-lg border-2 border-dark_blue"
            />
            <img
              src={poster2}
              className="w-full h-64 object-cover my-3 rounded-lg border-2 border-dark_blue"
            />
  
        </div>
      ),
    },
    {
      id: 3,
      title: "Article 2",
      description: "This is a brief description of Article 2.",
      date: "2024-09-23",
      bigPhoto: "https://via.placeholder.com/150",
      content: (
        <div>
          Detailed JSX content for Article 2 goes here. More information...
        </div>
      ),
    },
    {
      id: 4,
      title: "Article 2",
      description: "This is a brief description of Article 2.",
      date: "2024-09-23",
      bigPhoto: "https://via.placeholder.com/150",
      content: (
        <div>
          Detailed JSX content for Article 2 goes here. More information...
        </div>
      ),
    },
]
