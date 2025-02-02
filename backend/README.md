## フォルダ構成

```
src
  ├─Domain/
  │  └─Entity
  │  └─ValueObject
  │  └─Factory
  │  └─DomainService
  │  └─RepositoryInterface
  │
  ├─Application/
  │  ├─UseCase
  │  └─DataTransferObject(DTO)
  │  └─QueryServices
  │
  ├─Presentation/
  │  ├─Controller
  │  └─Request
  │
  └─Infrastructure/
  │  ├─(Kernel)
  │  └─Repository
```

## 各層の依存関係

```
Domain
↑	↑
↑	Application
↑	↑
↑	Presentation
↑	↑
Infrastructure
```