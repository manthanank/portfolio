# Portfolio

A modern, responsive portfolio website built with Angular 20 and Tailwind CSS. This portfolio showcases my work as a Full Stack Developer, featuring projects, skills, experience timeline, and contact information.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light theme support
- **Project Showcase**: Interactive project gallery with filtering by category
- **Skills Display**: Visual representation of technical skills and expertise
- **Experience Timeline**: Professional journey and achievements
- **Uses Page**: Tools, hardware, and software I use for development
- **Contact Form**: Easy way to get in touch
- **Performance Optimized**: Lazy-loaded components and optimized images

## 🛠️ Technologies Used

- **Frontend**: Angular 20, TypeScript, Tailwind CSS
- **Build Tools**: Angular CLI, PostCSS
- **Testing**: Jasmine, Karma
- **Deployment**: Docker support included

## 📁 Project Structure

```tree
src/
├── app/
│   ├── models/          # TypeScript interfaces
│   ├── pages/           # Main page components
│   │   ├── home/        # Landing page
│   │   ├── about/       # About me page
│   │   ├── projects/    # Project showcase
│   │   ├── uses/        # Tools and equipment
│   │   └── contact/     # Contact form
│   ├── services/        # Data and theme services
│   └── shared/          # Reusable components
│       ├── header/      # Navigation header
│       └── footer/      # Site footer
├── environments/        # Environment configuration
└── styles.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/manthanank/portfolio.git
cd portfolio
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm start
```

1. Open your browser and navigate to <http://localhost:4200/>

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## 🎨 Customization

### Adding New Projects

Edit `public/data/portfolio-data.json` to add new projects:

```json
{
  "id": 6,
  "title": "Your Project",
  "description": "Project description",
  "technologies": ["Angular", "Node.js"],
  "githubUrl": "<https://github.com/username/project>",
  "liveUrl": "<https://project-demo.com>",
  "featured": true,
  "category": "fullstack"
}
```

### Updating Personal Information

Modify the `personal` section in `public/data/portfolio-data.json` to update your information.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to `src/styles.css`.

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🐳 Docker

Build and run with Docker:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 4200:4200 portfolio
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contact

- **Email**: <manthan.ank46@gmail.com>
- **Location**: Karnataka, India
- **LinkedIn**: [Manthan Ank](https://www.linkedin.com/in/manthanank/)
- **GitHub**: [manthanank](https://github.com/manthanank)

---

Built with ❤️ using Angular and Tailwind CSS
