
import firestore from '@react-native-firebase/firestore';


export const loadData = async (collectionName) => {

    const snapShot = await firestore()
                        .collection(collectionName)
                        .get();


    // vérification des données 
    if (!snapShot.empty) {

        const datas = snapShot.docs.map(doc => {

            return { id: doc.id, ...doc.data() }

        })


        return datas;
    } else {
        return [];
    }



}
/**
 * 
 * fonction qui recupère la liste des questions ou actions
 *  en fonction de l'id de la category 
 * params(id<string> : id category)
*/

export const loadDataDareOrTruth = async (id,type)=>{
    console.log('loadDataDareOrTruth',id,type);

        const snapShot = await firestore()
                            .collection("TruthOrDare")
                            .where('category','==',id)
                            .where('type','==',type)
                            
                            .get();
    
    
        // vérification des données 
        if (!snapShot.empty) {
    
            const datas = snapShot.docs.map(doc => {
    
                return { id: doc.id, ...doc.data() }
    
            })
    
    
            return datas;
        } else {
            return [];
        }
}
