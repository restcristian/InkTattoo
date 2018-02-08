import React from 'react';
import TilesRow from '../../Tiles/TilesRow/TilesRow';
import Tile from '../../Tiles/Tile/Tile';
import HeaderTxt from '../../HeaderTxt/HeaderTxt';
import TeamBg from '../../../assets/imgs/team_bg.png';
import TeamImg1 from '../../../assets/imgs/team_1.png';
import TeamImg2 from '../../../assets/imgs/team_2.png';
import TeamTile from '../../Tiles/TeamTile/TeamTile';
import NewsLetterForm from '../../NewsLetterForm/NewsLetterForm';
import Aux from '../../../hoc/Auxiliary';
import './Team.css';

const Team = (props) => {
    const membersInfo = [
        {
            name: 'Corey Miller',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus eros, ultricies quis erat sit amet, elementum vulputate lorem. Sed at lacinia lectus, quis blandit libero. Quisque ac malesuada lectus. Proin gravida feugiat commodo. Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus, mi et euismod dictum, purus lorem vehicula justo, a iaculis mi nulla et risus.',
            teamImg: TeamImg1,
            socialLinks: [
                { type: 'facebook', url: '', caption: 'Facebook' },
                { type: 'twitter', url: '', caption: 'Twitter' },
                { type: 'instagram', url: '', caption: 'Instagram' }
            ]
        },
        {
            name: 'Kat Von D',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus eros, ultricies quis erat sit amet, elementum vulputate lorem. Sed at lacinia lectus, quis blandit libero. Quisque ac malesuada lectus. Proin gravida feugiat commodo. Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus, mi et euismod dictum, purus lorem vehicula justo, a iaculis mi nulla et risus.',
            teamImg: TeamImg2,
            socialLinks: [
                { type: 'facebook', url: '', caption: 'Facebook' },
                { type: 'twitter', url: '', caption: 'Twitter' },
                { type: 'instagram', url: '', caption: 'Instagram' }
            ]
        }
    ];
    const teamMembers = membersInfo.map((item, idx) => {
        return (
            <Aux key={idx}>
                <Tile
                    className="col-item team-member-pic "
                    bgImage={item.teamImg}
                >
                </Tile>
                <TeamTile
                    className="col-item team-tile-info"
                    memberInfo={item}
                    bgColor='#ccc8b6'
                />
            </Aux>
        );
    });
    return (
        <section className="s-team">
            <TilesRow>
                <Tile
                    className="col-item team-header-col"
                    bgImage={TeamBg}>
                    <HeaderTxt text="Team" />
                </Tile>
                {teamMembers}
                <Tile
                    className="col-item newsletter-form"
                    bgColor="#fff">
                    <NewsLetterForm />
                </Tile>
            </TilesRow>
        </section>
    );
};

export default Team;