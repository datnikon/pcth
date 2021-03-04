import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswer } from '../do-test/do-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public coffeeQuestions: QuestionAnswer[] = [
    {
      title: 'Hạt cà phê được phát hiện vào năm nào?',
      answers: [{
        title: '1671',
        isCorrect: true
      },
      {
        title: '1571'
      },
      {
        title: '1681'
      },
      {
        title: '1651'
      }]
    },
    {
      title: 'Con vật nào giúp phát hiện ra hạt cà phê?',
      answers: [{
        title: 'Con bò'
      },
      {
        title: 'Con chó'
      },
      {
        title: 'Con dê',
        isCorrect: true
      },
      {
        title: 'Con gà'
      }]
    },
    {
      title: 'Đặc điểm của hạt cà phê Arabica là gì?',
      answers: [{
        title: 'Hạt dài, dẹp, nhân cong',
        isCorrect: true
      },
      {
        title: 'Hạt tròn, dẹp, nhân cong',
      },
      {
        title: 'Hạt tròn, nhân thẳng',
      },
      {
        title: 'Hạt dài, dẹp, nhân thẳng'
      }]
    }
    ,
    {
      title: 'Vị của hạt cà phê Arabica là gì?',
      answers: [{
        title: 'Đằng, chua',
      },
      {
        title: 'Chua hậu ngọt',
        isCorrect: true
      },
      {
        title: 'Ngọt',
      },
      {
        title: 'Chát'
      }]
    }
    ,
    {
      title: 'Nồng độ cafein trong hạt cà phê Arabica là bao nhiêu?',
      answers: [{
        title: '0.5 -> 1.5',
      },
      {
        title: '0.6 -> 1.5',
      },
      {
        title: '0.7 -> 1.4',
      },
      {
        title: '0.9 -> 1.4',
        isCorrect: true
      }]
    },
    {
      title: 'Hạt cà phê Arabica thích hợp trồng ở độ cao bao nhiêu?',
      answers: [{
        title: '>300m',
      },
      {
        title: '>400m',
      },
      {
        title: '>500m',
      },
      {
        title: '>600m',
        isCorrect: true
      }]
    }
  ];

  public glassQuestion: QuestionAnswer[] = [
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Rock',
        isCorrect: true
      },
      {
        title: 'Viva'
      },
      {
        title: 'Irish'
      },
      {
        title: 'Short'
      }],
      img: 'https://www.blasteventhire.co.uk/wp-content/uploads/2017/09/rocks_glasses.jpg'
    },
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Viva',
        isCorrect: true
      },
      {
        title: 'Irish'
      },
      {
        title: 'Short'
      }],
      img: 'https://www.ocean-glassware.com/wp-content/uploads/2018/09/1B16315-VIVA-Footed-1.jpg'
    },
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Short',
      },
      {
        title: 'Viva'
      },
      {
        title: 'Poco',
        isCorrect: true
      },
      {
        title: 'Irish'
      }],
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxIPEA8PDhMQEA4OEBANEBARDw8QFxEWFhYRExMYHS0gGBomGxgVLTEhJikrLi4uIx8zODM4OCgtLisBCgoKDQ0NDw8NFSsZFRkrKzcrKystLSsrLS0tLSsrNystLSsrKysrLS0rLTctNy03LSsrKy0rKy0rKysrKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABQEGAgMEB//EAEMQAAIBAwEEBwIJCAsAAAAAAAABAgMEERIFBiFBEzFRYXGBkSIjFBYyVGKhscHRFSRSU2NygpMzNEJEZIOSosLS4f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHGrUUYuTziKcnhOTwlnglxfggOQIdLeyxmlKNeOGk037OU1nqlhnZ8Z7H5zRXjUgvvAsAlLeSxf8Ae7f+bD8R8Y7H55bedamvvAqgmfGGx+eWv8+l/wBjHxisfnlt/PpfiBUBLe8dj86oeVSLPJd757NpLM7uml3KcvsQF8GE8rPbxMgAAAAAAAAAAAAAAAAAAAAAAAAAABF2Q9Dq0OPuKsqce6DSqQS7lGcV5FNSfaTWtN9UXKdvbzx9JTqxk/TR6FJIDOQMDAGBkyYAw2RtsR6Wrb23WqtZVKi/ZUfePycujXmWWRLR69qy/YWMceNau8v0ooDYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAEi4f59HutZZ86qx9kiiiXQ9u9uJ8oQtrb+JKVWT9KsPQqoADIAxgYMgDrkiJslY2pd/StbDHgp3GfrZdka/JultWjPqjcW1a2/zISVWP+3pANmAAAAAAAAAAAAAAAAAAAAAAAAAAAw3ji+GOLyZJ23p+4dPnXlG3XJ4m8Ta71DW/IDp2FFukqjzmtKdw8rDSqScoxffGLivIpmKccI54AxgGQBjBg5BgcGiJvLBxpKuk27apTuVjrcYP24rxhqRdwdFzSUouLWU0012pgemMk0mnlNZTXU0ZJW7M38GjTbzKg5W0u33b0xb8Y6X5lUAAAAAAAAAAAAAAAAAAAAAAAAAQdo1HU2jbUuVKlWuJfvS93H0Tn6l41/ZvvL+6qfq1Cj4PCyvqXqBeRkIAAAAAAGDjJHMwwIOzKnR7QuKHKtSp3UezVH3c/qVM2A1vaK07StZr9CpF96l7OPU2QAAAAAAAAAAAAAAAAAAAAAAAAAQdgxxXvVz+E58nTi19peICn0O0pxfCN3RhOL5dLT9lx8XFp+QF5GTgmcgMmGAAAMZAyYYycZSA1rblVx2hZJcdc9DX0cTbZtJqFu/hW2dS407Cg02ur4RVylHyg5fUbeAAAAAAAAAAAAAAAAAAAAAAAAAJG82zpV6KlTz0tGSrUtONTkuuKzwy12tJ8E+DZXAGv7C24q9KM3hZzFtP2dUXiSw+MZJp5jJKSfBorxuIvmjVN7dynXqu7s69SzrSx0yo/IuMLg5Rylr7+ZqlTbF9avRKTq6eDdWCUn46UkQfWelj2odNHtXqaFsjaF/WWuVu4Rwnqmqri13KCb+ovUrpac9FrfNRdXPmnHK8wL3TR7V6mHcR7V6mvXN5hqCoYlJZXu7movPo6bx54IO1ry8oJzlbTnBNcYKtCPHt108rzwKN4rX0Y80a7tjeOf9HbwdSpJP255hQp/SqVMcPBZb5I+f7V2ltG5T+DOUH+rpKMpyXYm1nPpk3LcDcadu43l/J1rjGadOcnNW+ebbb1VPDguWesDat29lK1oaflTqSdWtNrEp1JcW3+BVAKAAAAAAAAAAAAAAAAAAAAAAAAAAAE3a2xKFyvbjiXKa6/PtKQA+dXe59ChUzOrDqctE4VEprulHr5dXEuUKalCOlalhe1HVNdjST4rmvVda4WNvbJp3lCVGaXFZhLnCfKR833dvNoVo1KdnTjOFvVlQkqtScujqR64JyqJxa7Fgg2DeCjSUEq0NSm1TUGq6cpYb4U6c48cJ8WupPvOjZG49GfvNdSCznTo0tdyep58csjTubm5v6ey7uEozmtemhOcYRp6XJ1ZcXGS4c+t8M819Vt6EacI04LTGCUYrsSA8ezNjULbjTh7T65y4zfmUACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAahuPbRo3e2KcUkvyl02F21bWjUb9ZM281vdqP5/td9t5ar02dbfiBP2XbKpvFfV2v6vY2NrF8s1JTqPHfiMfXvN0NY3bWdpbXl/iLGHkrGlL/AJs2cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABK2VZOlVu6rkm7m5VXC/sxjQpUUs837vPn3FRs1tbehRzCspa03KXQxlUgtUm1FN8W0sZ4f+BXs7OnTrV6sflV3SnUX0ow0KX+mMV5HuNa2Tt9VrvQqc4QlBxjOo2nKaaaWnqSxq556u02UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHXcVlThKcs4hGU3hZeEsvC5gdgINDeu1qLMaij3TjLh3PHUznW2mpx4SjKL7GsNAdu0b3VNUYQnNOOuc6eNOFLGjOGs9qfLxPNO1oyeXTllvLzTllvtypYZ1xnWljRLWl1L2X5YkR7m42mpVOpLM8U26MXjOI6ZRWrinnj2Mguwp0ofJpSzyxDRn+LLfoe7Zd/KpqjVpypThLTien3kcZVSGH1P7UzX9kX945yjOCloxp0rU2+WeGervKNeUnKFSquj6NylBJacNxlFvHW+EpLjw49oF8EeG1kl7U6a76klH7zNTeO1h8qouS9hTn9iKK4AAAAAAAAAAAAAAAAAAAAAAAAAAAACTdbt2VWaqStqWtcVOMVGS80dFXdS1lnhNZeeEuZdAEK33XoU3lOU+GFGq3KK8Emj1x2Lbrqt7Vd/wAHhkpACd+R6XKlQj+5RjF/UzxPdek23rlxbeOOFx6lx6i8AIkd2qP6U1wxwb+/J37P3etLd6qdCCl+m4rV45wVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=='
    },
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Magarita',
        isCorrect: true
      },
      {
        title: 'Viva'
      },
      {
        title: 'Poco',
      },
      {
        title: 'Short'
      }],
      img: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Magarita',
      },
      {
        title: 'Irish',
        isCorrect: true

      },
      {
        title: 'Poco',
      },
      {
        title: 'Short'
      }],
      img: 'data:image/jpeg;base64,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'
    }
  ];

  public toolQuestions: QuestionAnswer[] = [
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Bar spoo',
        isCorrect: true
      },
      {
        title: 'Bar whip'
      },
      {
        title: 'Bar blade'
      },
      {
        title: 'Ice tong'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSLt5fywzszTv1cSvhN9y90aXZ1KN-RGhclPflwB18lYvp7CSsB6qTOOl8w&usqp=CAc'
    },
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
      },
      {
        title: 'Pourer',
        isCorrect: true
      },
      {
        title: 'Bar Blade'
      }],
      img: 'data:image/jpeg;base64,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'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Bar Whip',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'data:image/jpeg;base64,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'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Khuôn LATTE ART',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://khoinghiepcafe.com/wp-content/uploads/Bo-khuon-ve-cappuccino-latte-art-trang-tri-giang-sinh-8-cai-mua-ban-dung-cu-pha-che-cafe-gia-re-tot-nhat-viet-nam-khoi-nghiep-cafe.jpg'
    }
  ];

  public questions: QuestionAnswer[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id === 'coffee') {
        this.questions = this.coffeeQuestions;
      }
      if (params.id === 'glass') {
        this.questions = this.glassQuestion;
      }
      if (params.id === 'tool') {
        this.questions = this.toolQuestions;
      }
    });
  }

}
