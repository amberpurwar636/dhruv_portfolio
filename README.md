# Dhruv Purwar - Developer Portfolio

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and EmailJS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or above)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

> The steps above work the same on **Windows, Mac, and Linux**.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [EmailJS](https://www.emailjs.com/) - Contact Form Emails
- [React Fast Marquee](https://www.react-fast-marquee.com/) - Skills Marquee
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notifications

## 📁 Project Structure

```
developer-portfolio/
├── app/
│   ├── components/
│   │   └── homepage/
│   │       ├── about/
│   │       ├── contact/
│   │       ├── education/
│   │       ├── experience/
│   │       ├── hero-section/
│   │       ├── projects/
│   │       └── skills/
│   ├── page.js
│   └── layout.js
├── public/
│   └── profile.png
└── utils/
    └── data/
        ├── personal-data.js
        ├── skills.js
        ├── educations.js
        ├── experience.js
        └── projects-data.js
```

## ✏️ Customization

All personal data can be updated in `utils/data/personal-data.js`:
- Name, designation, description
- Social links (GitHub, LinkedIn, LeetCode)
- Email, phone, address
- Resume link

## 📄 License

This project is open source and available under the [MIT License](LICENSE).