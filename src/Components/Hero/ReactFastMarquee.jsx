import Marquee from "react-fast-marquee";

const ReactFastMarquee = () => {
  const hotDeals = [
    {
      id: 1,
      text: "📚 New arrivals: Explore trending books in PathShala library",
    },
    {
      id: 2,
      text: "🔥 Popular now: Top 10 novels everyone is reading this week",
    },
    {
      id: 3,
      text: "🎧 Audiobooks section coming soon on PathShala",
    },
    {
      id: 4,
      text: "💡 Tip: Read 20 minutes daily to boost your knowledge",
    },
    {
      id: 5,
      text: "🚀 Join PathShala and start your reading journey today",
    },
    {
      id: 6,
      text: "📖 Featured: Best self-development books of 2026",
    },
    {
      id: 7,
      text: "🌍 Discover books from authors around the world",
    },
    {
      id: 8,
      text: "✨ New feature: Bookmark your favorite books easily",
    },
  ];
  return (
    <div className="bg-[#10131a] text-white md:py-4 py-3 md:mt-14 ">
      <Marquee>
        {hotDeals.map((deal) => (
          <span key={deal.id} className="text-sm mx-8">
            {deal.text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default ReactFastMarquee;