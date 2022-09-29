---
name: Issue Back-end
about: Issue padrão para back-end
title: Issue Back-end
labels: ''
assignees: ''

---

### Descrição
Uma breve descrição da tarefa a ser feita.

### Requisitos
- [ ] Criar rota de listagem de sei lá oq
- [ ] Validar id do professor
- [ ] Esses são só exemplos, beleza?

### Rota para receber
`GET` `/alunos/:alunoId`

### Formato
```javascript
{
    "alunos": [
        {
            "id": 13,
            "nome": "Lula",
            "idade": 76
        },
        {
            "id": 22,
            "nome": "Bolsonaro",
            "idade": 67
        },
        {
            "id": 27,
            "nome": "Naruto",
            "idade": 18
        }
    ]
}
```
