# StreamLink

StreamLink is a web application designed for video conferencing, providing users with a comprehensive solution for virtual communication similar to Zoom. It offers features such as scheduling meetings, starting new meetings, and recording ongoing meetings.

![StreamLink Demo](https://github.com/mohdnoman/StreamLink/blob/main/public/images/StreamLink.jpeg)

## Features

- **Video Conferencing:** Engage in high-quality video and audio meetings, ensuring clear communication.
- **Meeting Scheduling:** Plan and schedule meetings with ease, allowing for better organization and time management.
- **Meeting Recording:** Capture and store meeting recordings for future reference, making it easy to review past discussions.
- **User Authentication:** Secure and seamless user authentication to protect user data and privacy.

## Tech Stack

- **Frontend Framework:** Next.js - A powerful React framework for building server-side rendered applications.
- **Video API:** Stream - A versatile API for implementing video streaming functionality.
- **Authentication:** Clerk - A modern authentication solution for managing user sessions.
- **Programming Language:** TypeScript - A statically typed language that enhances JavaScript with type definitions.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mohdnoman/stream-link.git
   ```
   
2. Install dependencies:
   ```
   cd stream-link
   npm install
   ```
   
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```
     NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
     NEXT_PUBLIC_STREAM_API_SECRET=your_stream_api_secret
     ```
   
4. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Visit `http://localhost:3000` to view the application in your browser.
- Schedule meetings, start new meetings, and explore recording features.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact

For questions or feedback, please contact [Your Name](mailto:mohdnoman2751@gmail.com).
