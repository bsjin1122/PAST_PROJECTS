package com.mysite.sbb.question;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.mysite.sbb.DataNotFoundException;


import java.util.List;

@RequiredArgsConstructor
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    public List<Question> getList(){
        return this.questionRepository.findAll();
    }

    public Question getQuestion(Integer id){
        Optional<Question> question = this.questionRepository.findById(id);
            if(question.isPresent()){
                return question.get();
            }else{
                throw new DataNotFoundException("question not found");
            }

    }
}
