import Carousel from "@/components/Carousel";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center" style={{marginTop: "200px"}}>
        <div className="m-5 p-5">
          <h1 className="text-center my-5">
            Desenvolvedor Full Stack
          </h1>
          <h3 className="">
            Experiencia na programação da parte <br/> visual de websites utilizando o ReactJs
          </h3>
        </div>
        <img src="/portifolio/me.png"/>
      </div>
      <div style={{marginTop: "300px"}}>
        <h1 className="text-center mt-5">Habilidades</h1>
        <ul className="text-center list-group">
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
        </ul>
        <h1 className="text-center mt-5">Outras Habilidades</h1>
        <ul className="text-center list-group">
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
          <li className="list-group-item py-3">Skill 1</li>
        </ul>
      </div>
    </div>
  );
};