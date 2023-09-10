import { HomeIcon, MagnifyingGlassIcon, PencilSquareIcon, ChatBubbleBottomCenterIcon, BookmarkIcon, UserIcon } from "@heroicons/react/24/outline";

export const sidebarLinks = [
    {
      icon: HomeIcon,
      route: "/",
      label: "Home",
    },
    {
      icon: MagnifyingGlassIcon,
      route: "/search",
      label: "Search",
    },
    {
      icon: PencilSquareIcon,
      route: "/create-post",
      label: "Create Post",
    },
    {
      icon: BookmarkIcon,
      route: "/bookmarks",
      label: "BookMarks",
    },
    {
      icon: ChatBubbleBottomCenterIcon,
      route: "/messages",
      label: "Messages",
    },
    {
      icon: UserIcon,
      route: "/profile",
      label: "Profile",
    },
];

export const suggestedUsers = [
    {
      name: 'Mark',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_640.jpg',
    },
    {
      name: 'Elon Musk',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/08/01/06/37/ai-generated-8162220_640.jpg',
    },
    {
      name: 'Abdullah Karl',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866_640.jpg',
    },
    {
      name: 'Mark',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_640.jpg',
    },
    {
      name: 'Elon Musk',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/08/01/06/37/ai-generated-8162220_640.jpg',
    },
    {
      name: 'Abdullah Karl',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866_640.jpg',
    },
];

export const fakeCardData = [
  {
    id: 1,
    avatarUrl: "https://github.com/shadcn.png",
    username: "Scadcn",
    handle: "@scdn",
    timestamp: "3 hr",
    description:
      "This is the code report of September 22. The JavaScript got faster 5 times as someone named bun does it.",
    imageUrl:
      "https://pbs.twimg.com/media/F5gqyOQWQAA392C?format=png&name=small",
    messageCount: 43,
    likeCount: 999,
  },
  {
    id: 2,
    avatarUrl: "https://pbs.twimg.com/media/F5d7SujbEAAaU7i?format=webp&name=small",
    username: "ThePrimetime",
    handle: "@primetime",
    timestamp: "a few second ago",
    description:
      "This is the code report of September 22. The JavaScript got faster 5 times as someone named bun does it.",
    messageCount: 12,
    likeCount: 234,
  },
  {
    id: 3,
    avatarUrl: "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtd9M6KBOGZjnk94PFAEIGX-t7nDfWROVK17Mm8-ZMI%3Ds96-c&w=48&q=75",
    username: "ThePrimetime",
    handle: "@primetime",
    timestamp: "6 hr",
    description:
      "This is the code report of September 22. The JavaScript got faster 5 times as someone named bun does it.",
    imageUrl:
      "https://pbs.twimg.com/media/F5h56pbWsAAXaBS?format=jpg&name=small",
    messageCount: 9,
    likeCount: 23,
  },
  {
    id: 4,
    avatarUrl: "https://pbs.twimg.com/media/F5nGj66WcAAjnJj?format=webp&name=small",
    username: "Theo That",
    handle: "@theot3",
    timestamp: "6 hr",
    imageUrl:
      "https://pbs.twimg.com/media/F5gqyOQWQAA392C?format=png&name=small",
    messageCount: 222,
    likeCount: 6789,
  },
];

export const fakeComments = [
  {
    username: 'jsmastery',
    timestamp: '1 month ago',
    comment: 'Js Mastery is the best channel on youtube I have ever seen in my entire life.',
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaT7_E1QM4mvTNSWtPBHMMDw_-zILhgK-fjaPfdBZA=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'CN',
  },
  {
    username: 'coding_pro',
    timestamp: '2 weeks ago',
    comment: "I've learned so much from this channel. Keep up the great work!",
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaRS8LquQn2G8Ykp5cAIkQ4d5Y215RBuTAOo0iEc2w=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'CP',
  },
  {
    username: 'web_dev_guru',
    timestamp: '3 months ago',
    comment: 'Amazing content! Thanks for sharing your knowledge.',
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'WDG',
  },
  {
    username: 'jsmastery',
    timestamp: '1 month ago',
    comment: 'Js Mastery is the best channel on youtube I have ever seen in my entire life.',
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaT7_E1QM4mvTNSWtPBHMMDw_-zILhgK-fjaPfdBZA=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'CN',
  },
  {
    username: 'coding_pro',
    timestamp: '2 weeks ago',
    comment: "I've learned so much from this channel. Keep up the great work!",
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaRS8LquQn2G8Ykp5cAIkQ4d5Y215RBuTAOo0iEc2w=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'CP',
  },
  {
    username: 'web_dev_guru',
    timestamp: '3 months ago',
    comment: 'Amazing content! Thanks for sharing your knowledge.',
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'WDG',
  },
  {
    username: 'code_ninja',
    timestamp: '4 days ago',
    comment: 'This channel is a game-changer for developers. Highly recommended!',
    avatarSrc: 'https://yt3.ggpht.com/ytc/AOPolaRwhbjUkxcaOF32GfOsBeMOmdiS__WQ6-S71jo=s48-c-k-c0x00ffffff-no-rj',
    avatarFallback: 'CN',
  },
  // Add more fake data objects here if needed
];

export const searchProfile = [
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 1,
    name: "Abdullah Sidd",
    username: "abdul",
    avatarSrc: "https://yt3.ggpht.com/ytc/AOPolaShJd2MDY-VFd1RSORNHJWpQ4Kv2Xzyk4CvcuBq4Q=s48-c-k-c0x00ffffff-no-rj",
  },
  // Add more fake users here if needed
];
