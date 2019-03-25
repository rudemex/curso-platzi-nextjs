import React from "react";

export default class extends React.Component{
    render() {
        return (
            <div>
                <h1>¡Hola Mundo!</h1>
                <p>Bienvenido al curso de Next.js</p>
                <img src="/static/woonky-logo.gif" width="150" alt=""/>
                <style jsx>{`
                    h1{
                        color:red;
                    }
                    :global(p){
                        color: green;
                    }
                    body {
                        background: yellow;
                    }
                `}</style>
                <style jsx global>{`
                    body {
                        background: yellow;
                    }
                `}</style>
            </div>
        )
    }
}