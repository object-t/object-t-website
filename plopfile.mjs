export default function (plop) {
  plop.setGenerator('component', {
    description: 'Reactコンポーネントを作成します',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください（例 Button）',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/components.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/styles.hbs',
      },
    ],
  });
}
