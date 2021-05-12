const express = require('express');
const cors = require('corss');

const app = express()

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT);
app.use("/uploads", express.static('uploads'))

app.get("/muricir", (req, res)=>{
    return res.send({
        "melhor_resultado":{
            "acertividade":"98%",
            "nome":"Muricir",
            "nome_cientifico": "Byrsonima Crassifolia",
            "descricao":"O murici (nome científico Byrsonima crassifólia (L.) Rich) é uma planta presente em toda a América Latina, onde foram identificadas cerca de 130 espécies de muricis. O nome dessa árvore é de origem tupi e significa “árvore pequena”. As espécies existentes no Brasil podem ser encontradas em uma larga faixa que contempla áreas da Floresta Amazônica, estados do Sudeste, Centro-Oeste e também do Nordeste. Nesta região, mais especificamente na Caatinga, o período de floração é logo após as chuvas.",
            "imagens": ["http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", 
                        "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", ]
        },
        "outros_resultados": [
            {
                "acertividade":"80%",
                "nome":"Muricir",
                "nome_cientifico": "Byrsonima Crassifolia",
                "descricao":"O murici (nome científico Byrsonima crassifólia (L.) Rich) é uma planta presente em toda a América Latina, onde foram identificadas cerca de 130 espécies de muricis. O nome dessa árvore é de origem tupi e significa “árvore pequena”. As espécies existentes no Brasil podem ser encontradas em uma larga faixa que contempla áreas da Floresta Amazônica, estados do Sudeste, Centro-Oeste e também do Nordeste. Nesta região, mais especificamente na Caatinga, o período de floração é logo após as chuvas.",
                "imagens": ["http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", 
                            "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", ]
            },
            {
                "acertividade":"75%",
                "nome":"Muricir",
                "nome_cientifico": "Byrsonima Crassifolia",
                "descricao":"O murici (nome científico Byrsonima crassifólia (L.) Rich) é uma planta presente em toda a América Latina, onde foram identificadas cerca de 130 espécies de muricis. O nome dessa árvore é de origem tupi e significa “árvore pequena”. As espécies existentes no Brasil podem ser encontradas em uma larga faixa que contempla áreas da Floresta Amazônica, estados do Sudeste, Centro-Oeste e também do Nordeste. Nesta região, mais especificamente na Caatinga, o período de floração é logo após as chuvas.",
                "imagens": ["http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", 
                            "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", ]
            },
            {
                "acertividade":"68%",
                "nome":"Muricir",
                "nome_cientifico": "Byrsonima Crassifolia",
                "descricao":"O murici (nome científico Byrsonima crassifólia (L.) Rich) é uma planta presente em toda a América Latina, onde foram identificadas cerca de 130 espécies de muricis. O nome dessa árvore é de origem tupi e significa “árvore pequena”. As espécies existentes no Brasil podem ser encontradas em uma larga faixa que contempla áreas da Floresta Amazônica, estados do Sudeste, Centro-Oeste e também do Nordeste. Nesta região, mais especificamente na Caatinga, o período de floração é logo após as chuvas.",
                "imagens": ["http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", 
                            "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", "http://localhost:3000/uploads/muricir/muricir-fruto.jpg", ]
            }
        ]
    })
})