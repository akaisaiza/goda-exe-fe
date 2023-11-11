import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chat = ({ data }) => {
  const [userMessage, setUserMessage] = useState();
  const [chatgpt, setChatgpt] = useState();
  const MESSAGE_DEMO_USER = [""];
  const callApi = async (content) => {
    try {
      const response = await fetch('http://localhost:3001/askgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ content: content, role: "user" }],
        }),
      });
      const data = await response.json();
      return data.answers; // Trả về dữ liệu
    } catch (error) {
      console.error('Error:', error);
      return ''; // Trả về chuỗi rỗng hoặc giá trị mặc định nếu có lỗi
    }
  };
  const CONSTANT = {
    TYPE_SENDER: {
      SYSTEM: "goda",
      USER: "user",
    },
    TYPE_MESSAGE: {
      WELCOME: "normalMessage",
      NUMBER_PEOPLE_JOIN: "numberPeopleJoin",
      VALIDATE_MONEY: "valdiateMoney",
      TRAVEL_INTRO: "travelIntro",
      SCALL: "travelover"
    },
  };
  const DemoResponseData = [
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Xin chào, tôi có thể giúp gì cho bạn?",
      },
    },

    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.NUMBER_PEOPLE_JOIN,
        data: "Bạn đi cùng bao nhiêu người?",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Bạn thấy địa điểm này thế nào?",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.VALIDATE_MONEY,
        data: {
          name: "Tô Tượng Tài Trương",
          sumamry:
            "Địa điểm tô tưởng xịn xò được giới trẻ vô cùng yêu thích với các mẫu tượng độc đáo và màu tô chất lượng. Phù hợp với để đi với cặp đôi hoặc nhóm bạn",
          openTime: "8:00 - 23:00",
          ticketPrice: "30.000VND",
          seeMore: "posts/post-2",
          image:
            "https://hnm.1cdn.vn/2022/09/10/hanoimoi.com.vn-uploads-images-quangcao2-2022-09-10-_64fafe20-c91a-478b-82aa-0e98267a5334.jpeg",
          relatedBlog: "",
          booking:
            "https://www.booking.com/index.vi.html?aid=2311236;label=vi-vn-booking-desktop-ztDRHDT0cyr*llk1cdAHaQS652796014482:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9040331:li:dec:dm;ws=&gad_source=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5Wn4QNifEUXtuMxvbFYl1J2puR5Q8h3i22lvIuQYIPYGIZQtNpjRmBoC3TUQAvD_BwE",
          googleMapLink:
            "https://www.google.com/maps/place/Ho%C3%A0ng+Th%C3%A0nh+Th%C4%83ng+Long/@21.0334689,105.8366282,17z/data=!3m1!4b1!4m6!3m5!1s0x3135aba3381d7c49:0xb521a7d98f582937!8m2!3d21.0334689!4d105.8392031!16s%2Fm%2F05zw9vk?entry=ttu",
          travalocaLink:
            "https://www.xanhsm.com/ve-chung-toi/",
        },
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.VALIDATE_MONEY,
        data: {
          name: "Seen Escape Hà Nội",
          sumamry:
            "Trò chơi nhập vai đào tẩu cho nhóm bạn với cốt truyện và phòng chơi rùng rợn kỳ bí.",
          openTime: "9:00 - 23:00",
          ticketPrice: "Free",
          seeMore: "posts/post-1",
          image: "https://astarmedia.vn/wp-content/uploads/2021/05/seen-escape-anh-1.jpg",
          relatedBlog: "",
          booking:
            "https://www.booking.com/index.vi.html?aid=2311236;label=vi-vn-booking-desktop-ztDRHDT0cyr*llk1cdAHaQS652796014482:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9040331:li:dec:dm;ws=&gad_source=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5Wn4QNifEUXtuMxvbFYl1J2puR5Q8h3i22lvIuQYIPYGIZQtNpjRmBoC3TUQAvD_BwE",
          googleMapLink:
            "https://www.google.com/maps/place/H%E1%BB%93+Ho%C3%A0n+Ki%E1%BA%BFm/@21.0287747,105.8497898,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab953357c995:0x1babf6bb4f9a20e!8m2!3d21.0286669!4d105.8521484!16zL20vMGdwNjV3?entry=ttu",
          travalocaLink:
            "https://www.xanhsm.com/ve-chung-toi/",
        },
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Tôi rất vui vì bạn thích địa điểm này",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: chatgpt,
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Chuyến đi của bạn dự định có bao nhiêu người?",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Ở Hà Nội có rất nhiều địa điểm đi chơi, như là thăm quan lăng Bác, phố cổ, Hồ Gươm và có rất nhiều các hoạt động thể chất thú vị khác. Dưới đây là một vài địa điểm thú vị gần vị trí của bạn hiện tại.",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Ồ, sẽ thật vui khi có nhiều người bạn cùng trải nghiệm. Ngân sách của bạn là bao nhiêu?",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Bạn có thể mô tả chi tiết hơn được không?",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.VALIDATE_MONEY,
        data: {
          name: "Nhà tù Hỏa Lò",
          sumamry:
            "Nằm giữa trung tâm của Thủ đô Hà Nội, di tích lịch sử Nhà tù Hỏa Lò như minh chứng của một thời kỳ đấu tranh cách mạng, là biểu tượng cho tinh thần bất khuất, kiên cường của những người Việt Nam yêu...",
          openTime: "8:00 - 17:00",
          ticketPrice: "Free",
          seeMore: "posts/post-1",
          image:
            "https://file.qdnd.vn/data/images/0/2020/07/10/vuhuyen/2862020huyen243.jpg?dpi=150&quality=100&w=575",
          relatedBlog: "",
          booking:
            "https://www.booking.com/index.vi.html?aid=2311236;label=vi-vn-booking-desktop-ztDRHDT0cyr*llk1cdAHaQS652796014482:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9040331:li:dec:dm;ws=&gad_source=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5Wn4QNifEUXtuMxvbFYl1J2puR5Q8h3i22lvIuQYIPYGIZQtNpjRmBoC3TUQAvD_BwE",
          googleMapLink:
            "https://www.google.com/maps/place/Di+t%C3%ADch+Nh%C3%A0+t%C3%B9+H%E1%BB%8Fa+L%C3%B2/@21.0253297,105.8439032,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab96aa51de95:0x9701e10bee31af54!8m2!3d21.0253297!4d105.8464781!16zL20vMG45d3A?entry=ttu",
          travalocaLink:
            "https://www.xanhsm.com/ve-chung-toi/",
        },
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Với chi phí dưới 100.000 VND thì tôi nghĩ bạn có thể trải nghiệm địa điểm “Nhà tù Hỏa Lò”. Nhà tù Hoả Lò là một di tích nổi tiếng và thường được khách du lịch tham quan khi đến Hà Nội, phù hợp cho nhóm bạn 4 người. Tôi nghĩ đây là địa điểm đáng để bạn trải nghiệm và vừa với ngân sách của bạn. Dưới đây là thông tin về địa điểm:",
      },
    },
    {
      sender: CONSTANT.TYPE_SENDER.SYSTEM,
      content: {
        type: CONSTANT.TYPE_MESSAGE.WELCOME,
        data: "Ngoài Nhà Tù Hỏa Lò thì tôi đề xuất địa điểm Seen escape cũng rất thú vị. Đây là một trò chơi giải đố đang rất được các bạn trẻ Hà Nội yêu thích. Tôi nghĩ địa điểm này thích hợp với nhu cầu của bạn à bạn nên thử",
      },
    },
  ];

  const [chatContent, setChatContent] = useState([DemoResponseData[0]]);

  const TravelIntroCard = ({ props }) => {
    const [isSave, setIsSaved] = useState(false);
    const [isLike, setIsLike] = useState(false);
    return (
      <>
        <div className="w-[500px] items-center rounded-[10px] border-2 border-[#6366F1] md:flex">
          <img
            src={props.image}
            alt=""
            className="my-2 ml-2 h-[150px] w-[200px] rounded-[10px]"
          />
          <div className="px-2">
            <div className="flex w-full justify-between">
              <div className="card-intro-header pb-2 text-[18px] font-bold">
                {props.name}
              </div>
              <div className="flex">
                <img
                  src="/images/like-default.png"
                  alt=""
                  className={`h-[20px] w-[20px] cursor-pointer ${isSave ? "hidden" : ""
                    }`}
                  onClick={() => setIsSaved(!isSave)}
                />
                <img
                  src="/images/like.png"
                  alt=""
                  className={`h-[20px] w-[20px] cursor-pointer ${isSave ? "" : "hidden"
                    }`}
                  onClick={() => setIsSaved(!isSave)}
                />
                <img
                  src="/images/save-default.png"
                  alt=""
                  className={`ml-2 h-[20px] w-[20px] cursor-pointer ${isLike ? "hidden" : ""
                    }`}
                  onClick={() => setIsLike(!isLike)}
                />
                <img
                  src="/images/saved.png"
                  alt=""
                  className={`ml-2 h-[20px] w-[20px] cursor-pointer ${isLike ? "" : "hidden"
                    }`}
                  onClick={() => setIsLike(!isLike)}
                />
              </div>
            </div>
            <div className="travelSummary">{props.sumamry}</div>
            <div className="flex justify-between pt-3">
              <a href={props.seeMore}>
                <div className="rounded-[10px] bg-[#4F46E5] p-2 text-white">
                  See more
                </div>
              </a>
              <div className="flex">
                <a href={props.booking}>
                  <img
                    src="https://play-lh.googleusercontent.com/eJuvWSnbPwEWAQCYwl8i9nPJXRzTv94JSYGGrKIu0qeuG_5wgYtb982-2F_jOGtIytY"
                    alt=""
                    className="h-[30px] w-[30px] rounded-[5px]"
                  />
                </a>
                <a href={props.travalocaLink} className="mx-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/b/b1/Logo_GSM_xanh_SM.png"
                    alt=""
                    className="h-[30px] w-[30px] rounded-[5px]"
                  />
                </a>
                <a href={props.googleMapLink}>
                  <img
                    src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA"
                    alt=""
                    className="h-[30px] w-[30px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Message = ({ message }) => {
    return (
      <>
        {message.sender === CONSTANT.TYPE_SENDER.SYSTEM ? (
          <div class="col-start-1 col-end-8 rounded-lg p-3">
            <div class="flex flex-row items-center">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                <img src="/images/brand-logo.png" alt="" className="h-full" />
              </div>
              <div class="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                {message.content.type === CONSTANT.TYPE_MESSAGE.WELCOME ? (
                  <div className="">{message.content.data}</div>
                ) : (
                  <>
                    <TravelIntroCard props={message.content.data} />
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div class="col-start-6 col-end-13 rounded-lg p-3">
            <div class="flex flex-row-reverse items-center justify-start">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                A
              </div>
              <div class="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                <div>{message}</div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const MessageView = () => {
    console.log(chatContent);
    return (
      <>
        {chatContent.map((chatMessage) => {
          return <Message message={chatMessage} key={chatMessage} />;
        })}
      </>
    );
  };

  const GetResponse = async () => {
    if (userMessage == "Tôi muốn đi chơi ở Hà Nội") {
      setChatContent([
        ...chatContent,
        DemoResponseData[8],
        DemoResponseData[3],
        DemoResponseData[4],
        DemoResponseData[11],
        DemoResponseData[10],
      ], 50);
    } else if (userMessage == "Tôi dự định đi cùng 3 người bạn nữa") {
      setChatContent([...chatContent, DemoResponseData[9]]);
    } else if (userMessage == "Chi phí dưới 100000 đồng cho 1 người") {
      setChatContent([
        ...chatContent,
        DemoResponseData[12],
        DemoResponseData[11],
      ], 10);
    } else if (userMessage == "Xem địa điểm khác") {
      setChatContent([
        ...chatContent,
        DemoResponseData[13],
        DemoResponseData[4],
        DemoResponseData[2],
      ]);
    } else if (userMessage == "Tuyệt") {
      setChatContent([...chatContent, DemoResponseData[5]]);
    } else if (
      userMessage == "Hello" ||
      userMessage == "Xin chào" ||
      userMessage == "Hi"
    ) {
      setChatContent([...chatContent, DemoResponseData[0]]);
    } else {
      const apiResponse = await callApi(userMessage);
    setChatContent(prevContent => [
      ...prevContent,
      {
        sender: CONSTANT.TYPE_SENDER.SYSTEM,
        content: { 
          type: CONSTANT.TYPE_MESSAGE.WELCOME, 
          data: apiResponse || 'Có lỗi xảy ra khi gọi API' 
        }
      }
    ]);
  }
    
  };

  const onSentMessage = () => {
    if (userMessage) {
      chatContent.push(userMessage);
    }
    GetResponse();
    setUserMessage("");
  };

  const onTyping = (e) => {
    setUserMessage(e.target.value);
  };

  const onClearChatContent = () => {
    setChatContent([])
  }

  return (
    <div class="flex h-screen text-gray-800 antialiased">
      <div class="flex w-64 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2">
        <div class="flex h-12 w-full flex-row items-center justify-center">
          <div class="flex h-10 w-250 items-center justify-center">
            <img
              src="/images/logo_horizontal.png"
              className="h-[70px] w-[200px]"
            />
          </div>
        </div>
      </div>
      <div class="flex h-full w-full flex-row overflow-x-hidden">

        <div class="flex h-full flex-auto flex-col p-6">
          <div class="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
            <div class="mb-4 flex h-full flex-col overflow-x-auto">
              <div class="flex h-full flex-col">
                <div class="grid grid-cols-12 gap-y-2">
                  {/* chat content here */}
                  <MessageView />
                </div>
              </div>
            </div>
            <div class="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4">
              <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="ml-4 flex-grow">
                <div class="relative w-full">
                  <input
                    type="text"
                    class="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
                    value={userMessage}
                    onChange={onTyping}
                  />
                  <button class="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600"
                  onClick={onSentMessage}
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <svg
                      class="-mt-px h-4 w-4 rotate-45 transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
