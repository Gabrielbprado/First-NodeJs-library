import chalk from 'chalk';
import GetFile from './index.js';
import fs from 'fs';
import validation from './http-validation.js';

const path = process.argv;



function Exibir(valida,links,nomeFIle = "")
{
    if(valida)
    {
    console.log(chalk.bgCyan('Lista Validada: '),validation(links));
    
    }
    else
    {
        console.log(chalk.bgCyan('Lista de Links: '),chalk.yellow(nomeFIle),links);
    }
    
}

async function ProcessaText(argumento)
{
    
    const path = argumento[2];
    const valida = argumento[3] === '--valida';
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
        Exibir(valida,links);
    }else if (fs.lstatSync(path).isDirectory())
    {
        const arquivos = await fs.promises.readdir(path);
        arquivos.forEach(async (element) => {
            const links = await GetFile(`${path}/${element}`)
         Exibir(valida,links,element);    
        });
        
    }
}

ProcessaText(path);