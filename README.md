# 🚀 Cyberpunk Portfolio

A modern, interactive portfolio website built with React featuring 3D animations, dark/light theme switching, and a cyberpunk aesthetic.

## ✨ Features

- **🎨 Dual Theme System**: Dark cyberpunk and light modern themes
- **🌟 3D Background**: Interactive Three.js animations with geometric shapes
- **📱 Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **💼 Project Showcase**: Interactive flip cards with project details
- **🏆 Certification Gallery**: Modal-based certificate viewer
- **📧 Contact Form**: Integrated with Web3Forms API
- **⚡ Performance Optimized**: Smooth animations and fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, Framer Motion, Three.js
- **Styling**: CSS3 with custom properties and animations
- **3D Graphics**: @react-three/fiber, @react-three/drei
- **Form Handling**: Web3Forms API
- **Build Tool**: Create React App
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Shankar-soni-2006/Demo-PortFolio.git

# Navigate to project directory
cd Demo-PortFolio

# Install dependencies
npm install

# Start development server
npm start
```

### Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
REACT_APP_ENVIRONMENT=development
```

## 📦 Build & Deploy

```bash
# Create production build
npm run build

# Serve locally
npx serve -s build

# Deploy to Vercel
npx vercel --prod
```

## 🎯 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── ThreeBackground.js # 3D animated background
│   └── ...
├── App.js                 # Main application component
├── App.css               # Global styles and themes
└── index.js              # Application entry point
```

## 🎨 Customization

### Adding Projects
Edit the `PROJECTS` array in `src/App.js`:

```javascript
{
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  features: ['Feature 1', 'Feature 2'],
  status: 'LIVE',
  github: 'https://github.com/username/repo',
  demo: 'https://your-demo.com'
}
```

### Theme Colors
Modify CSS custom properties in `src/App.css`:

```css
:root {
  --primary-color: #00ffff;
  --secondary-color: #ff00ff;
  --accent-color: #ffff00;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Three.js community for 3D graphics inspiration
- Framer Motion for smooth animations
- Web3Forms for contact form handling
- DevIcons for technology logos

## 📞 Contact

**Shankar Soni**
- GitHub: [@Shankar-soni-2006](https://github.com/Shankar-soni-2006)
- Email: shankarsoni2006@gmail.com

---

⭐ Star this repository if you found it helpful!