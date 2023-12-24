export default {
    input: 'src/main.js', // Replace with your actual entry point
    output: {
      // your output configuration...
    },
    optimizeDeps: {
      include: [
        "@headlessui/react",
        "react",
        "react-audio-player",
        "react-device-detect",
        "react-dom",
        "react-multi-carousel",
        "react-router-dom",
        "react-slick",
        "react-youtube",
        "slick-carousel",
        "@types/react",
        "@types/react-dom",
        "@vitejs/plugin-react",
        "eslint",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-react-refresh",
        "sass",
        "vite",
      ],
    },
  };
  