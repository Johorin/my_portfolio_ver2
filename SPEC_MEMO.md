- Top Thumbnailビューに自分の写真をフェードインフェードアウトでスライドショーさせたい
  - スライドショーさせる写真は管理画面から設定する

- 画像の取り扱いはAWS S3＆CloudFrontを使いたい

- backendはクリーンアーキテクチャで構成する
  - Domain/
    - Entity
    - ValueObject
    - Factory
      - Entityを生成する
      - ReconstructHelperも
        - 古いEntityを元にデータを更新した新しいEntityを再構成する
    - DomainService
      - Entity自身で表現できないドメインルールを表現する
    - RepositoryInterface
  - Application/
    - UseCase
    - DataTransferObject(DTO)
      - Entity->Arrayに変換
    - QueryService
      - DBに対して読み取り専用でDTO用データを取得する
  - Presentation/
    - Controller
    - Request
  - Infrastructure/
    - (Kernel)
    - Repository
      - Entityの取得更新

- 各層の依存関係

Domain
↑	↑
↑	Application
↑	↑
↑	Presentation
↑	↑
Infrastructure
