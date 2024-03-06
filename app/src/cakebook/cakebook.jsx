import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import RecipesInCategories from '../cookbook/recipesInCategories';
import Recipe from '../cookbook/recipe';
import FormCreation from '../cookbook/Form';


export default function Cakebook(props) {
    const [open, setOpen]=useState(false);
    const [selectedRecipe,setSelectedRecipe]=useState({
        category: '',
        name: '',
        ingredients: [],
        description: '',
        tips: []
    });
    const [recipes, setRecipes]=useState([
        {
            category: 'Dania mięsne',
            name: 'Rosół drobiowy',
            ingredients: [
                '1 kurczak o wadze ok. 1,2- 1,5 kg',
                '3 litry wody',
                '2 marchewki',
                '2 pietruszki',
                '¼ korzenia selera',
                '1 cebula',
                'kawałek pora',
                'kilka gałązek natki pietruszki'
            ],
            description: 'Kurczaka pokroić na części. Oczyścić, odciąć nadmiar tłuszczu i kuper. Opłukać, przełożyć do garnka i zalać 3 litrami zimnej wody. Doprowadzić do zagotowania. W międzyczasie przygotować warzywa: Marchewki, pietruszki, seler, por, gałązki natki pietruszki i lubczyku umyć. Marchewki, pietruszki i seler obrać i pokroić na duże kawałki. Cebulę obrać. Łupiny z cebuli opłukać. (Dodadzą zupie koloru). Cebulę opalić (np. nabić na widelec i opalić nad palnikiem gazowym, albo używając palnika do Crème brûlée, albo wstawiając cebulę do piekarnika przy ustawionej funkcji grilla albo tak jak ja: przeciąć cebulę na pół i opiec na suchej patelni, układając ją przecięciem do dołu). Po zagotowaniu powstanie szumowina (biało- szara piana), którą należy zebrać łyżką cedzakową, sitkiem lub zwykłą łyżką. Do garnka włożyć marchewki, pietruszki, seler, por, opaloną cebulę z łupinami, liście laurowe, ziela angielskie, ziarenka pieprzu. Zmniejszyć temperaturę palnika na niską (tak, aby woda tylko lekko "mrugała") i gotować bez przykrycia 1 godzinę. Po godzinie gotowania, dodać sól, natkę pietruszki i lubczyk. Gotować dalej 30 minut. Sprawdzić smak rosołu. Według uznania doprawić solą i pieprzem do smaku. Z rosołu wyciągnąć marchewkę. Pokroić na plasterki lub w kostkę.',
            tips: ['Rosół podawać z ugotowanym makaronem, pokrojoną marchewką, kawałkami mięsa z kurczaka i świeżo posiekaną natką pietruszki lub szczypiorkiem.']
        },
        {
            category: 'Sałatki',
            name: 'Surówka Colesław',
            ingredients: [
                '1/2 białej kapusty (ok. 750 g)',
                '1/4 cebuli',
                '1 średnia marchewka',
                '1/2 łyżeczki soli',
                '1/3 łyżeczki świeżo zmielonego pieprzu',
                '4 łyżki majonezu',
                '1/2 łyżki octu winnego lub ryżowego',
                '1/2 łyżki soku z cytryny',
                '1 łyżeczka miodu',
                'koperek lub natka, opcjonalnie szczypta nasion kopru włoskiego'
            ],
            description: 'Kapustę umyć, obrać zewnętrzne liście jeśli są uszkodzone, przekroić na ćwiartki i wykroić głąb. Kapustę cieniutko poszatkować, włożyć do miski. Dodać obraną i drobno posiekaną cebulę oraz obraną i startą na tarce marchewkę. Doprawić solą, pieprzem i wymieszać. Dodać majonez, wlać ocet winny z sokiem z cytryny oraz miodem, i wszystko razem wymieszać. Można dodać posiekaną natkę lub koperek, można doprawić nasionami kopru włoskiego.',
            tips: []
        },
        {
            category: 'Dania mięsne',
            name: 'Filety kurczaka zapiekane z serem i pieczarkami',
            ingredients: [
                '1 podwójny filet z kurczaka',
                'sól, pieprz, po 1 łyżeczce papryki w proszku i oregano',
                '1 ząbek czosnku',
                '3 łyżki oliwy',
                '1 łyżeczka mąki ziemniaczanej/skrobi ziemniaczanej',
                '1/2 czerwonej cebuli',
                '8 pieczarek',
                'ok. 130 g mozzarelli w platrach lub tartej (żółtej)',
                'bazylia'
            ],
            description: 'Piekarnik nagrzać do 190 stopni C. Filety kurczaka przekroić na mniejsze części: z każdego filetu odciąć polędwiczkę (ruchoma część), następnie pozostały filet przekroić wzdłuż na 2 cieńsze plastry. Wszystkie kawałki kurczaka rozbić tłuczkiem na cieńsze plastry równej grubości. Doprawić je solą, pieprzem, papryką, oregano oraz startym czosnkiem. Nasmarować łyżką oliwy. Przygotować SOS POMIDOROWY NA PIZZĘ. Na koniec dodać do niego przez sitko mąkę ziemniaczaną i zagotować. Kawałki kurczaka włożyć na rozgrzaną patelnię z 1 łyżką oliwy i obsmażyć z dwóch stron. Przełożyć do naczynia żaroodpornego. Na tę samą patelnię wlać drugą łyżkę oliwy, dodać pokrojoną w piórka czerwoną cebulę i chwilę ją podsmażyć. Dodać umyte i osuszone pieczarki pokrojone na plastry, wymieszać i smażyć przez ok. 5 minut aż zaczną się rumienić. Na koniec posolić. Na każdym filecie wyłożyć po ok. 2 łyżki sosu pomidorowego, następnie dodać ser mozzarella (pokrojony na półplasterki lub starty). Na wierzch wyłożyć pieczarki z cebulą. Wstawić do nagrzanego piekarnika i piec przez ok. 15 minut. Posypać bazylią i .',
            tips: ['Danie można odgrzewać, np. włożyć do naczynia z upieczonym kurczakiem ugotowany i wymieszany z oliwą makaron i razem podgrzewać w piekarniku.', 'Podawać np. z makaronem.']
        }
    ]);
    const setSelectedRecipee = (recipeName) => {
        console.log(recipeName)
        const selRecipe = recipes.find((recipe)=>{
            return recipe.name === recipeName 
        })
        setSelectedRecipe(selRecipe);

        console.log('dddd '+ JSON.stringify(selectedRecipe))
    };
    const showRecipesNames = () => {
        const actualCategoryList = recipes.map((recipe) => {
            return recipe.category
        })
        const categories = new Set(actualCategoryList)

        const uniqueCategory = [...categories];
        return <div> {uniqueCategory.map((cat) => {
            const filtredRecipes = recipes.filter((recipe) => {
                return recipe.category === cat;
            });
            const filteredRecipesNames = filtredRecipes.map(recipe => {
                return recipe.name;
            });
            return <RecipesInCategories setSelectedRecipe={setSelectedRecipee} cat={cat} filteredRecipesNames={filteredRecipesNames} />
        })}
        </div>
    }
    const recipeDeletion = (index) => {
        const rawRecipes = JSON.stringify(recipes);
        const newRecipes = JSON.parse(rawRecipes);
        newRecipes.splice(index, 1)
        setRecipes(newRecipes);
    }
    const showRecipe = () => {
        if (selectedRecipe.name) {
            return <Recipe recipe={selectedRecipe} onRecipeDeletion={recipeDeletion} />
        } else {
            return <div>
                <h2>Wybierz przepis łosiu</h2>
            </div>
        }
    }
    const addRecipe = (newRecipe) => {
        const rawRecipes = JSON.stringify(recipes);
        const newRecipes = JSON.parse(rawRecipes);
        newRecipes.push(newRecipe);
        setRecipes(newRecipes);
    }

    return(
    <>
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }}  >
            <Grid item xs={12} sm={3} mx={3} >
                <h2>Dodaj nowy przepis</h2>
                <FormCreation addRecipe={addRecipe} />
            </Grid>
            <Grid item xs={12} sm={2} mx={2} >
                <h2>Lista przepisów</h2>
                <ol>
                 {showRecipesNames()}
                </ol>
            </Grid>
            <Grid item xs={12} sm={6} mx={3}>
                {showRecipe()}
            </Grid>
        </Grid>
    </>)
}

