import React from "react";
import PropTypes from "prop-types";

function Summoner({accountId, id, name, profileIconId,puuid,revisionDate,summonerLevel}){
    const recentDate = new Date(revisionDate)
    return <h4>{name}  / 레벨 :{summonerLevel} / 최근접속시간 : {recentDate.getFullYear()}.{recentDate.getMonth()+1}.{recentDate.getDate()} {recentDate.getHours()}:{recentDate.getMinutes()}</h4>
}
Summoner.propTypes  = {
    accountId:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    profileIconId:PropTypes.number.isRequired,
    puuid:PropTypes.string.isRequired,
    revisionDate:PropTypes.number.isRequired,
    summonerLevel:PropTypes.number.isRequired
}

export default Summoner;