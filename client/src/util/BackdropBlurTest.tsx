export function BackdropBlurTest() {
  return (
    <div
      style={{
        height: "300vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",

        overflowY: "scroll",
      }}
    >
      <h1 style={{ color: "#fff" }}>Testing Backdrop Blur</h1>
      <p style={{ color: "#fff", fontSize: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
        tellus sem. Integer vitae erat interdum, pulvinar tellus at, eleifend
        odio. Donec ac quam nec augue facilisis maximus sed vel justo. Morbi
        maximus, metus vel imperdiet sagittis, ante ante euismod dui, in
        vehicula felis felis ut lacus. Integer ullamcorper elit elit, vitae
        consequat enim vestibulum sit amet. Nulla in malesuada purus. Sed vitae
        mauris massa. Nullam vel erat tristique, blandit sapien vel, vehicula
        tortor. Donec maximus est vel quam aliquam faucibus. Duis semper elit
        eget elit fermentum, sit amet efficitur elit eleifend. Nullam eget
        libero non arcu convallis consequat nec quis arcu. Suspendisse rutrum
        aliquam urna nec vestibulum. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Mauris ornare, enim nec
        congue vehicula, libero nibh hendrerit turpis, id faucibus justo enim ut
        ex.
      </p>
    </div>
  );
}
