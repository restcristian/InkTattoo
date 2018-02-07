import React, { Component } from 'react';
import GalleryTiles from '../../../components/Tiles/GalleryTiles/GalleryTiles';
import GalleryTile from '../../../components/Tiles/GalleryTiles/GalleryTile/GalleryTile';
import GalleryImg1 from '../../../assets/imgs/galleryimg1.png';
import GalleryImg2 from '../../../assets/imgs/galleryimg2.png';
import GalleryImg3 from '../../../assets/imgs/galleryimg3.png';
import GalleryImg4 from '../../../assets/imgs/galleryimg4.png';
import GalleryImg5 from '../../../assets/imgs/galleryimg5.png';
import GalleryImg6 from '../../../assets/imgs/galleryimg6.png';
import GalleryImg7 from '../../../assets/imgs/galleryimg7.png';
import GalleryImg8 from '../../../assets/imgs/galleryimg8.png';
import Tile from '../../Tiles/Tile/Tile';
import TilesRow from '../../Tiles/TilesRow/TilesRow';
import HeaderTxt from '../../HeaderTxt/HeaderTxt';
import Modal from '../../UI/Modal/Modal';
import './Gallery.css';

class Gallery extends Component {

    state = {
        isModalOpen: false,
        selectedGalleryItem: {}
    }
    setCurrentGalleryItem(item) {
        this.setState({ isModalOpen: true, selectedGalleryItem: item });
    }
    closeModal() {
        this.setState({ isModalOpen: false });
    }
    render() {
        const galleryTilesInfo = [
            {
                bgImg: GalleryImg1,
                caption: 'Image 1'
            },
            {
                bgImg: GalleryImg2,
                caption: 'Image 2'
            },
            {
                bgImg: GalleryImg3,
                caption: 'Image 3'
            },
            {
                bgImg: GalleryImg4,
                caption: 'Image 4'
            },
            {
                bgImg: GalleryImg5,
                caption: 'Image 5'
            },
            {
                bgImg: GalleryImg6,
                caption: 'Image 6'
            },
            {
                bgImg: GalleryImg7,
                caption: 'Image 7'
            },
            {
                bgImg: GalleryImg8,
                caption: 'Image 8'
            },

        ];
        const galleryTiles = galleryTilesInfo.map((item, idx) => {
            return <GalleryTile onClick={() => this.setCurrentGalleryItem(item)} key={idx} className="col-item" bgImg={item.bgImg} caption={item.caption} />
        });
        return (
            <section className="s-gallery">
                <TilesRow>
                    <Tile
                        className="col-item"
                        bgColor="#afac9c"
                        aspectRatio="50.1%">
                        <HeaderTxt text="Gallery" />
                    </Tile>
                    {galleryTiles}
                </TilesRow>
                <Modal isOpen={this.state.isModalOpen} closeModal={() => this.closeModal()}>
                    <img src={this.state.selectedGalleryItem.bgImg} alt={this.state.selectedGalleryItem.caption} />
                </Modal>
            </section>

        );
    }
};
export default Gallery;