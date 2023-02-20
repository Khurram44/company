import React from "react";

const TATTI = "https://devstaxemailsend.herokuapp.com/email"

export async function SendEmail(a,b,c,d){
    const response = await fetch(TATTI,
        {
            method:"POST",
            body: JSON.stringify({
                "name":a,
                "email":b,
                "phone":c,
                "message":d
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        return response.json()
}