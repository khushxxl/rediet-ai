import {
  ChatBubbleIcon,
  HeartIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import HeroImage from "../../app/assets/hero-img.png";
function Hero() {
  const features = [
    {
      icon: <ChatBubbleIcon className="w-6 h-6 text-blue-500" />,
      title: "24/7 AI Coach",
      description:
        "Get personalized nutrition and fitness guidance anytime, anywhere. Our AI coach adapts to your goals and provides real-time feedback.",
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-red-500" />,
      title: "Health Tracking",
      description:
        "Monitor your nutrition, exercise, and wellness metrics in one place. Make data-driven decisions to improve your health journey.",
    },
    {
      icon: <PersonIcon className="w-6 h-6 text-green-500" />,
      title: "Personalized Plans",
      description:
        "The app is designed to be personalized to your needs. You can customize the app to your needs and goals. Compatible with Apple Health & Apple Watch",
    },
    {
      icon: <TimerIcon className="w-6 h-6 text-purple-500" />,
      title: "Progress Tracking",
      description:
        "Track your progress with detailed analytics and insights. Stay motivated by seeing your improvements over time.",
    },
  ];

  const FeatureCard = (feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => {
    return (
      <div className="flex flex-col space-y-4 justify-center items-start border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 w-[300px]">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen pb-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-4xl mx-auto mt-5">
        <h1 className="text-5xl text-black font-bold">Welcome to Rediet AI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-5">
          Your intelligent companion for achieving optimal health. Track your
          nutrition, exercise goals, and get personalized responses - all in one
          place.
        </p>
      </div>
      {/* <div className="mt-10 cursor-pointer">
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt=""
        />
      </div> */}

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-10 mt-12">
        <div className="grid grid-cols-1 gap-6">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[1]} />
        </div>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <Image
            src={HeroImage}
            alt="Rediet AI Platform Preview"
            width={450}
            height={400}
            className="relative z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FeatureCard {...features[2]} />
          <FeatureCard {...features[3]} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
