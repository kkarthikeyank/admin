import React from "react";

export default function Loader() {
    return (
        <div>

            <div style={{ position: "fixed", zIndex: 9999, top: '-33px', left: "-33px", right: "-33px", bottom: "-33px", background: "#0000003b" }} className="flex justify-center items-center h-screen bg-transparent   m-8">

                <div className="flex items-center justify-center ">
                    <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                </div>


            </div>
        </div>
    )
}
