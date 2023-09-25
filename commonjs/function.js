import firestore from '@react-native-firebase/firestore';
//charge les données d'une collection à partir de son name

export const loadData = async (collectionName) => {
    const snapshot = await firestore().collection(collectionName).get();

    // vérification des données
    if (!snapshot.empty) {
        const datas = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });
        return datas;
    } else {
        return [];
    }
};//end loadData

//nombre aléatoire entre min et max
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}//end getRandomInt