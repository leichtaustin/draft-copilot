const API_KEY = '6787cecc900f4df7a6a119e6b6d7982a';
const API_ROOT = 'https://api.sportsdata.io/v3/mlb/projections/json/PlayerSeasonProjectionStats/';
const season = '2022';


export const getPlayerData = async () => {
    const response = await fetch(`${API_ROOT}${season}?key=${API_KEY}`);
    const json = await response.json();
    return json.data;
};





/*export const sampleData = [
    {StatID:3499380,
    TeamID:1,
    PlayerID:10002094,
    Name:"Trea Turner",
    Team:"LAD",
    Position:"SS",
    PositionCategory:"IF",
    Started:148,
    AverageDraftPosition:0.9,
    AuctionValue:42,
    Games:149,
    FantasyPoints:571.4,
    AtBats:565.7,
    Runs:102.2,
    Hits:176.9,
    Singles:116.4,
    Doubles:33.1,
    Triples:3.6,
    HomeRuns:23.6,
    RunsBattedIn:78.5,
    BattingAverage:0.3,
    Strikeouts:113.5,
    Walks:38.8,
    StolenBases:31.2,
    OnBasePercentage:0.3,
    SluggingPercentage:0.5,
    TotalBases:288.5,},
    {StatID:3499380,
    TeamID:1,
    PlayerID:10002094,
    Name:"Max Turner",
    Team:"LAD",
    Position:"OF",
    PositionCategory:"IF",
    Started:148,
    AverageDraftPosition:0.9,
    AuctionValue:42,
    Games:149,
    FantasyPoints:571.4,
    AtBats:565.7,
    Runs:102.2,
    Hits:176.9,
    Singles:116.4,
    Doubles:33.1,
    Triples:3.6,
    HomeRuns:23.6,
    RunsBattedIn:78.5,
    BattingAverage:0.3,
    Strikeouts:113.5,
    Walks:38.8,
    StolenBases:31.2,
    OnBasePercentage:0.3,
    SluggingPercentage:0.5,
    TotalBases:288.5,},
    {StatID:3499380,
    TeamID:1,
    PlayerID:10002094,
    Name:"Bob Burner",
    Team:"LAD",
    Position:"SS",
    PositionCategory:"IF",
    Started:148,
    AverageDraftPosition:0.9,
    AuctionValue:42,
    Games:149,
    FantasyPoints:571.4,
    AtBats:565.7,
    Runs:102.2,
    Hits:176.9,
    Singles:116.4,
    Doubles:33.1,
    Triples:3.6,
    HomeRuns:23.6,
    RunsBattedIn:78.5,
    BattingAverage:0.3,
    Strikeouts:113.5,
    Walks:38.8,
    StolenBases:31.2,
    OnBasePercentage:0.3,
    SluggingPercentage:0.5,
    TotalBases:288.5,},

]*/