### GitHub 관리 규칙

- Commit
    - Commit 규칙을 통해 각 branch 별 commit 사항을 관리한다.
        - 커밋은 기능 '완성' 단위로  수정만했다고 커밋하는게 아니라  **최소 함수나 클래스 구현한 단위로 커밋한다.**

    <br>
    
    - commit message
        - 형식
            
            ```markdown
            <type>(<scope>): <subject>          
            
            <BLANK LINE>
            
            <body>
            ```
            
            <br>
            
        - type
            - feat : 새로운 기능에 대한 커밋
            - fix : 버그 수정에 대한 커밋
            - build : 빌드 관련 파일 수정에 대한 커밋
            - chore : 그 외 자잘한 수정에 대한 커밋
            - ci : CI관련 설정 수정에 대한 커밋
            - docs : 문서 수정에 대한 커밋
            - style : 코드 스타일 혹은 포맷 등에 관한 커밋
            - refactor :  코드 리팩토링에 대한 커밋
            - test : 테스트 코드 수정에 대한 커밋
        
        <br>
        
        ex) commit message example
        
        `refactor (LoginService) : id, pw matching system change`

