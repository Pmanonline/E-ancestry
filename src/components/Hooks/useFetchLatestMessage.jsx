// import { useContext, useState, useEffect } from "react";
// import { ChatContext } from "../context/chatContext";
// import { getRequest } from "../../features/chatFeature/chatActions";

// const backendURL =
//   process.env.NODE_ENV !== "production"
//     ? "http://localhost:8080"
//     : "https://gekoda-api.onrender.com";

// function useFetchLatestMessage(chat) {
//   const { newMessage, notifications } = useContext(ChatContext);
//   const [latestMessage, setLatestMessage] = useState(null);

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!chat?._id) {
//         console.warn("Chat ID is not defined");
//         return;
//       }

//       try {
//         const response = await getRequest(
//           `${backendURL}/api/messages/${chat._id}`
//         );

//         if (!response || !response.data || !Array.isArray(response.data)) {
//           console.warn("Unexpected response format", response);
//           return;
//         }

//         if (response.data.length === 0) {
//           console.log("No messages found");
//           setLatestMessage(null);
//           return;
//         }

//         const lastMessage = response.data[response.data.length - 1];
//         console.log("Latest Message:", lastMessage); // Check the last message
//         setLatestMessage(lastMessage);
//       } catch (error) {
//         console.error("Failed to fetch the latest message:", error);
//       }
//     };

//     getMessages();
//   }, [newMessage, notifications, chat]);

//   return { latestMessage };
// }

// export default useFetchLatestMessage;

import { useState, useEffect } from "react";
import { getRequest } from "../../features/chatFeature/chatActions";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

function useFetchLatestMessage(chat, newMessage, notifications) {
  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      if (!chat?._id) {
        console.warn("Chat ID is not defined");
        return;
      }

      try {
        const response = await getRequest(
          `${backendURL}/api/messages/${chat._id}`
        );

        if (!response || !response.data || !Array.isArray(response.data)) {
          console.warn("Unexpected response format", response);
          return;
        }

        if (response.data.length === 0) {
          console.log("No messages found");
          setLatestMessage(null);
          return;
        }

        const lastMessage = response.data[response.data.length - 1];
        console.log("Latest Message:", lastMessage); // Check the last message
        setLatestMessage(lastMessage);
      } catch (error) {
        console.error("Failed to fetch the latest message:", error);
      }
    };

    getMessages();
  }, [newMessage, notifications, chat]);

  return { latestMessage };
}

export default useFetchLatestMessage;
