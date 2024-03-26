// Making a connection between our app and firebase database
import { initializeApp } from "firebase/app";
import { 
    getFirestore , 
    collection, 
    getDocs ,
    doc ,
    getDoc,
    query , 
    where } from "firebase/firestore/lite"  //for real-time changes just remove the "/lite" from the import, we added it to make it a lil bit light weight version

const firebaseConfig = {
  apiKey: "AIzaSyAD2hWwzxeJPomLj5D4pDoWdg0u05Icsqg",
  authDomain: "vanlife-12b4e.firebaseapp.com",
  projectId: "vanlife-12b4e",
  storageBucket: "vanlife-12b4e.appspot.com",
  messagingSenderId: "403049165392",
  appId: "1:403049165392:web:57c55010ae7fa184f8d755"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// refactoring the fetching functions
 const  vansCollectionRef = collection(db, "vans")

 export async function getVans(){
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    return vans
 }

 export async function getVan(id){
    const docRef =doc(db, "vans" ,id);
    const snapshot =await getDoc(docRef);
    const van= {...snapshot.data(),id: snapshot.id}
    // console.log(van)
    return van
 }

 export async function getHostVans(){
    const q =query(vansCollectionRef, where("hostId","==","123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    return vans
 }
 

// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json() 
//     return data.vans;

// }

export async function getHostVanDetails(id){
    const res=await fetch(`/api/host/vans/${id}`)
    if(!res.ok){
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data=await res.json();
    return data.vans[0]
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}