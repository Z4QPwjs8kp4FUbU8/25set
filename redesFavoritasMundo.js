import { getCSS } from "./common.js"
async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

        const data = [
            {
                values: valores,
                labels: redes,
                type: 'pie',
                textinfo: 'label+percent'
            }
        ]
}

redesFavoritasMundo()
const laytout = {

    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais com mais usuários',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
size: 30
}
},
            font: getCSS('--font')
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}
