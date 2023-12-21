import chalk from "chalk";

function ExtrairList(list)
{
    return list.map((Objectlinks) => Object.values(Objectlinks).join());
}




export default async function GetListUrl(lists)
{
    
    const links =  ExtrairList(lists);
    const status =  await ValidaUrl(links);
    return lists.map((listaUpdate,indice) => ({
        ...listaUpdate,
        Status: status[indice]
    }));
}

function TrataErro(erro)
{
    if(erro.cause.code === 'ENOTFOUND')
    {
    return "Link não encontrado";
    }else
    {
        return "Ocorreu um Erro Por Favor Tente Novamente";
    }
}

async function ValidaUrl(ArrayUrl)
{
    
    const ArrayPending = await Promise.all
    (
        ArrayUrl.map(async (url) =>
        {
            try
            {
            const response = await fetch(url);
            return response.status;
            }catch (erro)
            {
                return TrataErro(erro);
            }
        })
    )
    return ArrayPending;
    
   
}




