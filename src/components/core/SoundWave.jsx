const SoundWave = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex gap-1">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="animate-sound-wave h-20 w-2 rounded bg-lime-400"
            style={{ animationDelay: `${index * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SoundWave;
