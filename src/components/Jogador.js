import api from "../apis/api-futebol";
import { useState, useEffect } from "react";

function Jogador({ infos }) {
  const [liga, setLiga] = useState({});
  const [clube, setClube] = useState({});
  const [nacao, setNacao] = useState({});

  useEffect(() => {
    if (infos.id !== undefined) {
      api
        .get(`/nations/${infos.nation}`, {
          headers: {
            "x-auth-token": "5721fe41-431e-47aa-b74f-45ce383e281d",
          },
        })
        .then((result) => {
          setNacao(result.data.nation);
        });
      api
        .get(`/clubs/${infos.club}`, {
          headers: {
            "x-auth-token": "5721fe41-431e-47aa-b74f-45ce383e281d",
          },
        })
        .then((result) => {
          setClube(result.data.club);
        });
      api
        .get(`/leagues/${infos.league}`, {
          headers: {
            "x-auth-token": "5721fe41-431e-47aa-b74f-45ce383e281d",
          },
        })
        .then((result) => {
          setLiga(result.data.league);
        });
    }
  }, [infos]);

  return (
    <div className="info-jogador">
      {infos.position === "GK" ? (
        <div>
          <div className="dado-unico">
            <p className="sub-titulo">Nome completo:</p> {infos.name} {infos.lastName}
          </div>
          <div className="dado-unico"><p className="sub-titulo">Idade: </p> {infos.age}</div>
          <div className="dado-unico"><p className="sub-titulo">Nacionalidade: </p> {nacao.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Posição: </p> {infos.position}</div>
          <div className="dado-unico"><p className="sub-titulo">Perna: </p> {infos.foot}</div>
          <div className="dado-unico"><p className="sub-titulo">Liga: </p> {liga.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Clube: </p> {clube.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Overall: </p> {infos.rating}</div>
          <div className="dado-unico">
          <p className="sub-titulo"> Habilidades</p>
            <div><p className="sub-titulo">Salto GK: </p> {infos.goalkeeperAttributes.diving}</div>
            <div><p className="sub-titulo">Manuseio GK: </p> {infos.goalkeeperAttributes.handpng}</div>
            <div><p className="sub-titulo">Shot GK: </p> {infos.goalkeeperAttributes.kicking}</div>
            <div><p className="sub-titulo">Posionamento GK: </p> {infos.goalkeeperAttributes.positioning}</div>
            <div><p className="sub-titulo">Reflexos GK: </p> {infos.goalkeeperAttributes.reflexes}</div>
            <div><p className="sub-titulo">Velocidade GK: </p> {infos.goalkeeperAttributes.speed}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="dado-unico"><p className="sub-titulo">
            Nome completo :</p> {infos.name} {infos.lastName}
          </div>
          <div className="dado-unico"><p className="sub-titulo">Idade: </p> {infos.age}</div>
          <div className="dado-unico"><p className="sub-titulo">Nacionalidade: </p> {nacao.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Posição: </p> {infos.position}</div>
          <div className="dado-unico"><p className="sub-titulo">Perna: </p> {infos.foot}</div>
          <div className="dado-unico"><p className="sub-titulo">Liga: </p> {liga.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Clube: </p> {clube.name}</div>
          <div className="dado-unico"><p className="sub-titulo">Overall: </p> {infos.rating}</div>
          <div className="dado-unico habilidades">
            <p className="sub-titulo habilidade">
            Habilidades</p>
            <div className="habilidade"><p className="sub-titulo">Defesa: </p> {infos.defending}</div>
            <div className="habilidade"><p className="sub-titulo">Drible: </p> {infos.dribbling}</div>
            <div className="habilidade"><p className="sub-titulo">Passe: </p> {infos.passing}</div>
            <div className="habilidade"><p className="sub-titulo">Fisíco: </p> {infos.physicality}</div>
            <div className="habilidade"><p className="sub-titulo">Shot: </p> {infos.shooting}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Jogador;
