export default function Homepage() {
  return (
    <div
      className="flex items-center justify-center mx-auto min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph')`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="p-4  shadow-lg rounded-md bg-gray-300">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-black">
            Gemini AI Integration
          </h1>
        </div>
      </header>
    </div>
  );
}
