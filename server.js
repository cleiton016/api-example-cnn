const express = require('express');
const cors = require('corss');

const app = express()

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT);
app.use("/uploads", express.static('uploads'))

app.get("/muricir", (req, res)=>{
    return res.send(
       [
            {
                "acertividade":"98%",
                "nome":"Muricir",
                "nome_cientifico": "Byrsonima Crassifolia",
                "descricao":"O murici (nome científico Byrsonima crassifólia (L.) Rich) é uma planta presente em toda a América Latina, onde foram identificadas cerca de 130 espécies de muricis. O nome dessa árvore é de origem tupi e significa “árvore pequena”. As espécies existentes no Brasil podem ser encontradas em uma larga faixa que contempla áreas da Floresta Amazônica, estados do Sudeste, Centro-Oeste e também do Nordeste. Nesta região, mais especificamente na Caatinga, o período de floração é logo após as chuvas.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/muricir/muricir-fruto.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            },
            {
                "acertividade":"80%",
                "nome":"Umbu",
                "nome_cientifico": "Umbu  ....",
                "descricao":"Nativo do semiárido brasileiro, o umbu (Spondias tuberosa Arruda) é classificado como uma boa alternativa de produção para incrementar a renda do produtor. A fruta é muito consumida in natura, mas também pode ser usada para a fabricação de sucos, néctares, polpas, doces, geleias, compotas e sorvetes. A fruteira possui raízes que armazenam água, tornando sua irrigação menos rígida. Além disso, a espécie é pouco exigente em adubação.",
                "imagens": ["https://api-example-cnn.herokuapp.com/uploads/umbu/umbu.jpg"]
            }
        ]
    )
})
