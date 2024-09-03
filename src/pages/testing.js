import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";
import { ChatContext } from "../components/context/chatContext";
import UserChats from "../components/chats/userChats";
import useFetchRecipientUser from "../components/Hooks/useFetchRecipient";
import { PotentialChats } from "../components/chats/potentialChats";
import ChatBox from "../components/chats/ChatBox";
import "../App.css";

// Separate component to handle each chat item
const ChatItem = ({ chat, user, onClick }) => {
  const { recipientUser, error } = useFetchRecipientUser(chat);

  if (error) {
    console.log("Error fetching recipient user:", error);
    return <p>Error loading recipient user</p>;
  }

  return (
    <div className="chat" onClick={onClick}>
      {" "}
      {/* Ensure onClick is attached to the root element */}
      <UserChats chat={chat} user={user} recipientUser={recipientUser} />
    </div>
  );
};

const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, isUserChatsError, updateCurrentChat } =
    useContext(ChatContext);
  const [sortedChats, setSortedChats] = useState([]);

  useEffect(() => {
    const fetchAndSortChats = async () => {
      try {
        // Fetch the latest message for each chat
        const latestMessages = await Promise.all(
          userChats.map(async (chat) => {
            const { latestMessage } = await useFetchLatestMessage(chat._id);
            return { chat, latestMessage };
          })
        );

        // Sort chats by latest message timestamp
        const sorted = latestMessages
          .filter(({ latestMessage }) => latestMessage) // Ensure latestMessage exists
          .sort(
            (a, b) =>
              new Date(b.latestMessage.createdAt) -
              new Date(a.latestMessage.createdAt)
          )
          .map(({ chat }) => chat);

        setSortedChats(sorted);
      } catch (error) {
        console.error("Error fetching latest messages:", error);
      }
    };

    fetchAndSortChats();
  }, [userChats]);

  return (
    <section>
      <PotentialChats />
      {userChats?.length > 0 ? (
        <div className="flex h-screen">
          <div className="w-[40%] bg-gray-100 p-2 mod:hidden">
            {isUserChatsLoading && <p>Loading chats...</p>}
            {isUserChatsError && <p>Error loading chats: {isUserChatsError}</p>}

            {userChats?.map((chat, index) => (
              <div key={index}>
                <ChatItem
                  chat={chat}
                  user={user}
                  onClick={() => updateCurrentChat(chat)} // Pass the onClick handler
                />
              </div>
            ))}
          </div>

          {/* Chat Body - 60% width */}
          <div className="w-[60%] bg-white p-4">
            <ChatBox />
          </div>
        </div>
      ) : (
        <p>No chats available.</p>
      )}
    </section>
  );
};

export default ChatPage;

// const CreateChat = useCallback(
//   async (firstId, secondId) => {
//     try {
//       const response = await PostRequest(
//         `${backendURL}/api/chats`,
//         JSON.stringify({ firstId, secondId }) // Correctly passing the body
//       );

//       if (response.error) {
//         throw new Error(response.message || "Failed to create chat.");
//       }

//       setUserChats((prev) => [...prev, response.data]);

//       // Handle the response if successful, e.g., updating state
//     } catch (error) {
//       console.error("Error creating chat:", error);
//       // Handle error, e.g., show a notification
//     }
//   },
//   [userId]
// );
