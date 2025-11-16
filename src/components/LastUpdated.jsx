function LastUpdatedWatermark() {
    const lastUpdated = "November 16, 2025";
    return (
        <div
            style={{
                position: "fixed",
                bottom: "10px",
                right: "15px",
                fontSize: "0.85rem",
                color: "rgba(0,0,0,0.5)",
                fontStyle: "italic",
                zIndex: 1000,
                pointerEvents: "none",
            }}
        >
            Last updated: {lastUpdated}
        </div>
    );
}
export default LastUpdatedWatermark;