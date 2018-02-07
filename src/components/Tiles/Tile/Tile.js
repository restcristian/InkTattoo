import React from 'react';

const Tile = (props) => {
    let classes = ["Tile"];
    if (props.className) {
        classes.push(props.className);
    }
    return (
        <div className={classes.join(' ')}>
            <div className="Tile__inner" style={{
                width: '100%',
                position: 'relative',
                height: 0,
                paddingBottom: props.aspectRatio,
                // minHeight: props.height,
                backgroundImage: 'url(' + props.bgImage + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundColor:props.bgColor
            }}>

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width:'100%',
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    overflow:'auto'
                }}>
                    {props.children}
                </div>
            </div>


        </div>
    );
};

export default Tile;