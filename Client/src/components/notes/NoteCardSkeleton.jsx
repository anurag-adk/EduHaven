const NoteCardSkeleton = () => {
  return (
    <div
      className="relative flex flex-col p-4 rounded-xl animate-pulse"
      style={{
        backgroundColor: "var(--note-default)",
        minHeight: "140px",
      }}
    >
      {/* Content area */}
      <div className="flex-1">
        {/* Title */}
        <div
          className="h-4 rounded mb-2"
          style={{
            backgroundColor: "var(--txt-dim)",
            opacity: 0.3,
            width: "50%",
          }}
        />

        {/* Subtext */}
        <div
          className="h-3 rounded"
          style={{
            backgroundColor: "var(--txt-dim)",
            opacity: 0.25,
            width: "70%",
          }}
        />
      </div>

      {/* Date */}
      <div className="mt-2">
        <div
          className="h-3 rounded"
          style={{
            backgroundColor: "var(--txt-disabled)",
            opacity: 0.2,
            width: "40%",
          }}
        />
      </div>
    </div>
  );
};

export default NoteCardSkeleton;
