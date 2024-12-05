import All from "./All";
const Insight = () => {
  return (
    <div className="text-center px-20 py-20">
      <h2 className="text-5xl font-semibold pb-7">Skill Match Insights</h2>
      <p className="pb-7">Explore the latest trends in the gig economy.</p>
      <button className="pb-20 border-none">
        View all <i className="bx bx-chevron-right"></i>
      </button>
      <All />
    </div>
  );
};

export default Insight;
