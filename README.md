## Getting Started

To setup prisma:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To reset database:

```bash
npx prisma migrate reset
```

To seed data to database:

```bash
npx prisma db seed --preview-feature
```
