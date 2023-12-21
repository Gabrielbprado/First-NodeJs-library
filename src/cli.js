import chalk from 'chalk';
import GetFile from './index.js';
import fs from 'fs';

const path = process.argv;



function Exibir(links,nomeFIle = "")
{
    console.log(chalk.bgCyan('Lista de Links: '),chalk.yellow(nomeFIle),links);
    
}

async function ProcessaText(argumento)
{
    const path = argumento[2];
    try
    {
        if(fs.lstatSync(path));
    }
catch (error){
    if(error.code == 'ENOENT')
    {

    console.log(chalk.red("Arquivo ou Diretorio não Encontrado"));
    return;
    }
}
    if(fs.lstatSync(path).isFile())
    {
        const links = await GetFile(path);
        Exibir(links);
    }else if (fs.lstatSync(path).isDirectory())
    {
        const arquivos = await fs.promises.readdir(path);
        arquivos.forEach(async (element) => {
            const links = await GetFile(`${path}/${element}`)
         Exibir(links,element);    
        });
        
    }
}

ProcessaText(path);