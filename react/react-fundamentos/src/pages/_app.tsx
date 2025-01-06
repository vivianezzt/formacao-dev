/* eslint-disable @typescript-eslint/no-explicit-any */
import "../app/globals.css"
export default function App(props: any){
    const {Component, pageProps } = props
    return(
        <Component {...pageProps}/>
    )
}