import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id^='section-']");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement; // Cast to HTMLElement
        const sectionTop = sectionElement.offsetTop - 100; // Adjust this value according to your layout
        const sectionId = sectionElement.id;
        
        if (scrollPosition >= sectionTop) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex bg-purple-200 fixed w-full top-0 z-10">
        <div className="flex gap-4 justify-end w-[90%] m-auto">
          <button
            className={`px-1 py-2 border border-black ${
              activeSection === "section-1" ? "bg-red-500" : ""
            }`}
            onClick={() => handleClick("section-1")}
          >
            Section 1
          </button>
          <button
            className={`px-1 py-2 border border-black ${
              activeSection === "section-2" ? "bg-red-500" : ""
            }`}
            onClick={() => handleClick("section-2")}
          >
            Section 2
          </button>
          <button
            className={`px-1 py-2 border border-black ${
              activeSection === "section-3" ? "bg-red-500" : ""
            }`}
            onClick={() => handleClick("section-3")}
          >
            Section 3
          </button>
          <button
            className={`px-1 py-2 border border-black ${
              activeSection === "section-4" ? "bg-red-500" : ""
            }`}
            onClick={() => handleClick("section-4")}
          >
            Section 4
          </button>
        </div>
      </header>

      <div className="mt-[100px] text-3xl flex flex-col gap-[80px]">
        <div id="section-1">
          <h1>Section 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magnam soluta sunt alias distinctio? Suscipit tempore nobis fugit
            voluptatum dolores. Nam enim voluptates voluptatibus porro inventore
            delectus. Accusamus, blanditiis cum.
          </p>
        </div>

        <div id="section-2">
          <h1>Section 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magnam soluta sunt alias distinctio? Suscipit tempore nobis fugit
            voluptatum dolores. Nam enim voluptates voluptatibus porro inventore
            delectus. Accusamus, blanditiis cum.
          </p>
        </div>

        <div id="section-3">
          <h1>Section 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magnam soluta sunt alias distinctio? Suscipit tempore nobis fugit
            voluptatum dolores. Nam enim voluptates voluptatibus porro inventore
            delectus. Accusamus, blanditiis cum.
          </p>
        </div>

        <div id="section-4">
          <h1>Section 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magnam soluta sunt alias distinctio? Suscipit tempore nobis fugit
            voluptatum dolores. Nam enim voluptates voluptatibus porro inventore
            delectus. Accusamus, blanditiis cum.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
